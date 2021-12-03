const { input } = require('./input');

const length = 12;

console.log(calculateGamma(input) * calculateEpsilon(input));

function calculateGamma(input) {
  let binary = '';
  
  for (let i = 0; i < length; i++) {
	var temp = 0;
	input.forEach(element => {element[i] === '1' ? temp++ : temp--});
	if (temp > 0) binary += '1'; else binary += '0';
  }
  
  return parseInt(binary, 2);
}

function calculateEpsilon(input) {
  let binary = '';
  
  for (let i = 0; i < length; i++) {
	var temp = 0;
	input.forEach(element => {element[i] === '1' ? temp++ : temp--});
	if (temp < 0) binary += '1'; else binary += '0';
  }
  
  return parseInt(binary, 2);
}

