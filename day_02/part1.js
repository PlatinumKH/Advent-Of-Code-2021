const { input } = require('./input');

let h = 0;
let v = 0;

input.forEach(ins => {
	if (ins.dir === 'forward') h += parseInt(ins.steps);
		else
	v += parseInt(convert(ins));
});

console.log(h * v);

function convert(ins) {
  return (ins.dir === 'down') ? ins.steps : -ins.steps;
}