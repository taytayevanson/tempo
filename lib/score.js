var score = {};

// populate blank score of measures
for(i=1; i<=cfg.measures; i++) {
	score[i] = {};

	// measure holds an object for each note at the set granularity
	for(n=1; n<=cfg.granularity; n++) {
		score[i][n] = {};
	}
}

module.exports = score;