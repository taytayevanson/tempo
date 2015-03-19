function toVars(obj) {
	var str = '';

	for(i in obj) {
		var val;

		switch(typeof obj[i]) {
			case 'string':
				val = '"' + obj[i] + '"';
				break;
			default:
				val = obj[i];
				break;
		}

		str += i + ' = ' + val + "\n";
	}

	console.log(str);
}

module.exports = {
	toVars: function(obj) {
		toVars(obj);
	}
};