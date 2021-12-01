const { input } = require('./input');

let inc = 0;

for (var i = 0; i < input.length - 2; i++) {
	/* 
	 * The middle 2 values are always going to be the same, so they cancel out. No need to calculate
	 * The only different values are the beginning of Window X and the end of Window X + 1
	 */
    if (input[i] < input[i + 3]) inc++;
}

console.log(inc);