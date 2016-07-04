var hsl2rgb = require('./index.js');
var test = require('tape');

test('converts [H,S,L] to [R,G,B]', function(t) {
	t.equal(typeof hsl2rgb, 'function', 'is a function');
	t.equal(hsl2rgb([0, 0, 0]).length, 3, 'returns array of 3 values');
	t.deepEqual(hsl2rgb([0, 1, 0.5]), [1, 0, 0], 'converts red');
	t.end();
})