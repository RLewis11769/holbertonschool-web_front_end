/* Closure = function with access to parent scope even after parent has closed */

function countPrimeNumbers () {
  // Counts prime numbers from 2 to 100 (there are 25)
  let count = 0;

  for (let x = 2; x <= 100; x++) {
    if (isPrime(x)) {
      count++;
    }
  }
  return (count);
}

function isPrime (num) {
  // Returns true if num is prime
  for (let n = 2; n < num; n++) {
    if (num % n === 0) {
      return (false);
    }
  }
  return (num > 1);
}

const t1 = performance.now();

for (let x = 0; x < 100; x++) {
  countPrimeNumbers();
}

const t2 = performance.now();
const time = t2 - t1;
console.log(`Execution time of calculating prime numbers 100 times was ${time} milliseconds.`);
