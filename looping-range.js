function range(start, end, step) {
  let numberArray = [];

  if ((start > end) || (step <= 0) || (start === undefined) || (step === undefined) || (end === undefined)) {
    return numberArray;
  }

  for (let i = start; i <= end; i += step) {
    numberArray.push(i);
  }

  return numberArray;
}

console.log(range(0, 10, 2));

console.log(range(10, 30, 5));

console.log(range(-5, 2, 3));
