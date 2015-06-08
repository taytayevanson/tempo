// global
_ = require('underscore');
cfg = require('./config');
score = require('./lib/score');

///
var

Timer = require('nanotimer'),
exe = require('./lib/exe'),
n = 1,
m = 1,

tick = function(){

	// note
	// process.stdout.write(score[m][n] + "\n");

	exe(m, n);
	tock();
},

// after each tick completes
tock = function() {
	n++;
	if(n == cfg.granularity) {
		
		// measure
		// process.stdout.write('measure' + "\n");
		n = 1;
		m++;
	}
},

// initialize
timer = new Timer();
timer.setInterval(tick, null, cfg.note[cfg.granularity] + 'u');