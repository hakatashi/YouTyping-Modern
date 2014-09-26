var xml2js = require('xml2js');
var async = require('async');
var sugar = require('sugar');
var fs = require('fs');

var parser = new xml2js.Parser({
	trim: true
});

var builder = new xml2js.Builder({
	trim: true,
	headless: true,
	renderOpts: {
		pretty: false
	}
});

async.map([0,1,2,3,4,5,6,7,8,9], function (n, done) {
	var filename = 'number-' + (n + 1).pad(2) + '.svg';
	fs.readFile(filename, function (error, data) {
		if (error) return done(error);

		parser.parseString(data.toString(), function (error, data) {
			if (error) return done(error);

			data.svg.$.id = 'number-' + n.toString();
			done(null, data);
		});
	});
}, function (error, results) {
	var ret = '';
	results.forEach(function (result) {
		ret += builder.buildObject(result);
	});
	console.log(ret);
});
