

function sumFor(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function sumWhile(array) {
  let total = 0;
  let i = 0;
  while (i < array.length) {
    total += array[i];
    i++;
  }
  return total;
}

function sumRecursion(array) {
  if (array.length === 0) {
    return 0;
  }
  return array[0] + sumRecursion(array.slice(1, array.length));
}

function sumTheSimpleWay(array) {
  return _.reduce(array, (total, num) => total + num, 0);
}

const a1 = [1, 2, 3, 4, 5];
console.log(sumFor(a1));
console.log(sumWhile(a1));
console.log(sumRecursion(a1));
console.log(sumTheSimpleWay(a1));
