var express = require('express'),
		mysql = require('mysql'),
		crud = require('mysql-crud'),
		path = require('path');

		cfg = require('./config');
		db = mysql.createPool(cfg.db);
		lights = crud(db, 'lights');
		
		app = express();

// use jade
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.Router());

module.exports = function(cb) {
	require('glob')(__dirname + '/routes/*.js', function(err, results) {
		if(err) throw err;
		else {
			for(r of results) {
				require(r)(app);	
			}
		}
		cb(app);
	});
};