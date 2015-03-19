// dependencies
var glob = require('glob'),
		fs = require('fs'),
		path = require('path'),
		async = require('async'),
		spawn = require('child_process').execFile,
		ProgressBar = require('progress'),
		done,
		bar,
		grunt,

		// config
		paths = {
			src: './src/*',
			build: './build/'
		};	

function generate(src, finish) {
	var file = path.basename(src, '.js'),
			build = fs.createWriteStream(paths.build + file + '.py'),

			child = spawn('node', [src]).stdout.pipe(build);
			child.on('error', grunt.fail.fatal);
			child.on('close', function(code) {

				// tick progress bar
				bar.tick();
				finish(null, code);
			});
}

module.exports = function(g) { grunt = g; grunt.registerTask('generate', 'Generates Python files from JS files', function() {
	var done = this.async();
	async.waterfall([

		// get src files
		function(cb) {
			glob(paths.src, function(err, src) {
				if(err) cb(err);
				else {

					// create progress bar
					bar = new ProgressBar(':current/:total files built  :bar', {
						total: src.length,
						width: 100,
						complete: '=',
						incomplete: ' ',
					});

					// async each parameters
					cb(null, src, generate);
				}
			});
		},

		// build
		async.eachSeries

	], function(err, res) {
		if(err) grunt.fail.fatal(err);
		else {
			grunt.log.ok('All files built successfully!');
			done();
		}
	});
});

grunt.registerTask('default', ['generate']);};