/* Demonstrates scope chain and closures */
/* Inner functions have access to outer function's variables */
/* Don't need to pass arguments */

const globalVariable = 'Welcome';

function outer () {
  alert(globalVariable);

  const course = 'Holberton';

  function inner () {
    alert(`${globalVariable} ${course}`);

    const exclamation = '!';

    function inception () {
      alert(globalVariable + ' ' + course + exclamation);
    }
    inception();
  }
  inner();
}
outer();
