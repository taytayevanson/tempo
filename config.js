var base,
		cfg = {},
		tempo = 120,
		time = 4,
		measures = 180,
		seconds = 60,
		metric = 1000000,
		notes = [2, 4, 8, 16];

cfg.granularity = notes[notes.length - 1];
cfg.measures = measures;
cfg.tempo = tempo;
cfg.note = {};

// milliseconds per beat
cfg.note[1] = base = 1 / (tempo / seconds) * metric * time;

for(n of notes) {
	cfg.note[n] = base / n;
}

// console.log(cfg);
module.exports = cfg;