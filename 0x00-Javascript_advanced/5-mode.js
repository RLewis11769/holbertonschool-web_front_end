/* Closure = function with access to parent scope even after parent has closed */

console.log('Start of the execution queue')

setTimeout(function() {
  console.log ('Final code block to be executed')
}, 0)

for (let x = 1; x < 11; x++) {
  console.log(x)
}

console.log('End of the loop printing')
