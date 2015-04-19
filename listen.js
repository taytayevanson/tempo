require('./net/app')(function(app) {
	app.listen(3000, function() {
		console.log('listening');
	})
});