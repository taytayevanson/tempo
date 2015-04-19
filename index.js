// global dependencies
cfg = require('./config');
_ = require('underscore');

// index dependencies
var timer,
		Timer = require('nanotimer'),
		score = require('./lib/score'),
		n = 1,
		m = 1;

console.log(score);

function tick(){
	// calls every "64th note" of the score
	// process.stdout.write('tick ');

	// score.measure.note
	console.log(score[m][n]);

	tock();
}

// after each tick completes
function tock() {
	n++;
	if(n == cfg.granularity) {
		process.stdout.write('measure' + "\n");
		n = 1;
		m++;
	}
}

// initialize
timer = new Timer();
timer.setInterval(tick, null, cfg.note[cfg.granularity] + 'u');