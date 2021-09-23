/* Closure = function with access to parent scope even after parent has closed */

/*
 * Directions:
 * createClassRoom contains a function studentSeat that takes argument seat and returns a function that returns the seat number"
 * Create a closure classRoom, calling createClassRoom with 10 students
 */

/* Meaning classRoom is the return of createClassRoom, which is an array of 10 studentSeat functions */
/* So when call classRoom at 3rd index, it returns the studentSeat function at 3rd index */
/* I think studentSeat is also a closure */

function createClassRoom (numberOfStudents) {
  // Function that creates function
  function studentSeat (seat) {
    // Function that returns function that returns seat number (seat/n + 1)
    return function () {
      // Returns seat number
      return (seat);
    };
  }

  // Populates array with studentSeat functions (available to )
  const students = [];
  for (let n = 0; n < numberOfStudents; n++) {
    students.push(studentSeat(n + 1));
  }
  return (students);
}

const classRoom = createClassRoom(10);

// Print return of function created by createClassRoom at index
// Test by: console.log(classRoom[numberOfStudents]());
