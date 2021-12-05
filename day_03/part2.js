const { input } = require('./input');

const length = 12;

console.log(calculateOxygen(input) * calculateCO2(input));

function calculateOxygen(input) {
  for (let i = 0; (i < length && input.length > 1); i++) {
	let zero = 0;
	let one = 0;
	
    input.forEach(element => element[i] === '1' ? one++ : zero++);
	
	let filterValue = one < zero ? '0' : '1';
	input = input.filter(element => element[i] === filterValue);
  }
  
  return parseInt(input, 2);
}

function calculateCO2(input) {
  for (let i = 0; (i < length && input.length > 1); i++) {
	let zero = 0;
	let one = 0;
	
    input.forEach(element => element[i] === '1' ? one++ : zero++);
	
	let filterValue = one < zero ? '1' : '0';
	input = input.filter(element => element[i] === filterValue);
  }
  
  return parseInt(input, 2);
}

