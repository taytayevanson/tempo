var i = 0;
var interval = setInterval(function() {
	console.log('ipsum');

	i++;
	if(i >= 10) clearInterval(interval);
}, 100);