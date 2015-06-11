// global
_ = require('underscore');
cfg = require('./config');
score = require('./lib/score');

///
var
exe = require('./lib/exe'),

n = 1,
m = 1,

tick = function(){

	// note
	// process.stdout.write(score[m][n] + "\n");

	exe(m, n, score[m][n]);
	tock();
},

tock = function() {
	n++;
	if(n == cfg.granularity) {
		
		// measure
		// process.stdout.write('measure' + "\n");
		n = 1;
		m++;
	}
};

// initialize
if   (true     )  new (require('nanotimer'))().setInterval(tick, null, cfg.note[cfg.granularity] + 'u');
else (function() {
			console.log('debugging');

})();