const { input } = require('./input');

let inc = 0;

for (var i = 1; i < input.length; i++) {
    if (input[i] > input[i - 1]) inc++;
}

console.log(inc);