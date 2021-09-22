/* Closure = combination of function and lexical environment */
/* "welcomeMessage should be a closure for alert displaying Welcome <fullName>" */
/* Meaning welcomeMessage sets up environments aka makes functions */

function welcomeMessage (fullName) {
  return () => alert('Welcome ' + fullName);
}

const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');
