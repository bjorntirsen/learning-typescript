type Combinable1 = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable1,
  input2: Combinable1,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } /* else {
    result = 
  } */

  return result;
}

const combinedAges = combine(30, 26, 'as-number');

console.log(combinedAges);

const combinedNames = combine('Max', 'Anna', 'as-text');

const combinedStringAges = combine('30', '26', 'as-number');
