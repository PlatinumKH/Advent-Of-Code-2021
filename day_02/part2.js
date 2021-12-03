const { input } = require('./input');

let h = 0;
let v = 0;
let aim = 0;

input.forEach(ins => {
	let steps = parseInt(ins.steps);
	if (ins.dir === 'down') aim += steps;
		else if (ins.dir === 'up') aim -= steps;
			else {
				h += steps;
				v += aim*steps;
			}
});

console.log(h * v);