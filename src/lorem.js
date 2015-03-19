var i = 0;
var interval = setInterval(function() {
	console.log('lorem');

	i++;
	if(i >= 10) clearInterval(interval);
}, 100);