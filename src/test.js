var i = 0;
var interval = setInterval(function() {
	console.log('test');

	i++;
	if(i >= 10) clearInterval(interval);
}, 100);