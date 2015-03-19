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
		},
		messages = {
			progress: ':current/:total files built  :bar',
			complete: 'All files built successfully!'
		};

function generate(src, finish) {
	var 

	file = path.basename(src, '.js'),
	build = fs.createWriteStream(paths.build + file + '.py'),

	child = spawn('node', [src]).stdout.pipe(build);
	child.on('error', grunt.fail.fatal);
	child.on('close', function(code) {

		// tick progress bar
		bar.tick();
		finish(null, code);
	});
}

module.exports = function(g) {
	grunt = g;

	grunt.initConfig({
		watch: {
		  scripts: {
		    files: [paths.src],
		    tasks: ['generate'],
		    options: {
		      spawn: false,
		    },
		  },
		},
	});

	grunt.registerTask('generate', function() {
		done = this.async();
		async.waterfall([

			// get src files
			function(cb) {
				glob(paths.src, function(err, src) {
					if(err) cb(err);
					else {

						// create progress bar
						bar = new ProgressBar(messages.progress, {
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
				grunt.log.ok(messages.complete);
				done();
			}
		});
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['generate']);
};