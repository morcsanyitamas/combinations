function testNumber(number, k) {
  const indexes = [];
  let tester = 1;
  let testerIndex = 0;
  while (number !== 0) {
    if (number & tester) {
      indexes.push(testerIndex);
      if (indexes.length > k) {
        return null;
      }
    }
    number = number >> 1;
    testerIndex++;
  }
  if (indexes.length === k) {
    return indexes;
  } else {
    return null;
  }
}

function getCombination(indexes, input){
    return indexes.map(index => input[index]);
}

const input = [100, 200, 300, 400, 500];
const k = 3;
const combinations = [];

const maxNumber = 2 ** input.length;
for (let number = 0; number < maxNumber; number++) {
  const indexArray = testNumber(number, k);
  if (indexArray) {
    combinations.push(getCombination(indexArray, input));
  }
}

console.log(combinations);
