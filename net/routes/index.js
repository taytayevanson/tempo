function route(req, res) {

	lights.load({}, function(err, results) {
		if(err) console.error(err);
		else console.log(results);
	});

	res.render('index');
}

module.exports = function(app) {
	app.get('/', route);
};