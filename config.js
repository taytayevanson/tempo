var base,
		cfg = {},
		tempo = 120,
		time = 4,
		measures = 8,
		metric = 1000000,
		notes = [2, 4, 8, 16, 32, 64];

cfg.granularity = notes[notes.length - 1];
cfg.measures = measures;
cfg.tempo = tempo;
cfg.note = {};

// milliseconds per beat
cfg.note[1] = base = 1 / (tempo / 60) * metric * time;

for(n of notes) {
	cfg.note[n] = base / n;
}

console.log(cfg);
module.exports = cfg;