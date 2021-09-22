/* Demonstrates lexical/static scoping */
/* Variable may only be referenced within block of code where defined */

function welcome (firstName, lastName) {
  const fullName = firstName + ' ' + lastName;

  function displayFullName () {
    alert('Welcome ' + fullName + '!');
  }
  displayFullName();
}
