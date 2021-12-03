const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
	.map((ins) => {
		var [dir, steps] = ins.split(' ');
		steps = steps.trim();
		return {dir, steps};
	});

module.exports = {
	input,
};