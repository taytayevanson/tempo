function route(req, res) {
	res.render('add');
}

function post(req, res) {
	res.redirect('/');
}

module.exports = function(app) {
	app.get('/add', route);
	app.post('/add', post);
};