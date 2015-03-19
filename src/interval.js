var i = 0;
var interval = setInterval(function() {
	console.log('interval');

	i++;
	if(i >= 10) clearInterval(interval);
}, 100);