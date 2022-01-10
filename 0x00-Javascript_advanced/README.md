# Advanced JavaScript

## Tasks

### 0-welcome.js
- Add nested functions that cause reference error from referencing variable that is not defined
	- Nested functions and lexical scope
	- Test by:
		```
		welcome('Holberton', 'School');
		```

### 1-nested_functions.js
- Add nested functions that do not cause reference error because inner functions have access to outer functions' variables
	- Scope chain and closures (function with access to parent scope even after parent has closed)

### 2-function_me.js
- Add function that returns function (put functions into variables)
	- Closure to set up environment
	- Test by:
		```
		guillaume();
		alex();
		fred();
		```

### 3-classrooms.js
- Add multiple nested functions in a loop that all do something slightly different
	- Function generator
	- Test by:
		```
		console.log(classRoom[0]());
		console.log(classRoom[3]());
		console.log(classRoom[9]());
		```

### 4-math.js
- Add function that takes two args, with closure to hold one arg and wait to be called with second
	- Function generator
	- Test by:
		```
		console.log(addBy100(20));
		console.log(divideBy10(20));
		console.log(divideBy100(200));
		console.log(addBy1000(20));
		```

### 5-mode.js
- Add function that changes DOM based on buttons
	- Not working

### 6-hogwarts.js
- Add nested functions with private methods
	- Private methods can look similar to classes

### 7-timeout.js
- Add functions in specific order to be executed in different order based on asynchronous execution
	- Stack order and setTimeout

### 8-payments.js
- Add function that calls other function to be executed first based on synchronous execution
	- Stack order

### 9-prime.js
- Add function to be timed using performance.now()

### 10-prime.js
- Set loop to run code from 9-prime.js 100 times
	- Execution stack and stack timing

### 11-prime.js
- Use setTimeout to run code from 10-prime.js in fraction of the time (when setTimeout is finished, entire loop has already been calculated)
	- Changing stack order to do most of the calculation at the end of the execution stack
	- **Note**: 11 should be fastest, then 9, and 10 slowest

### 12-room_area.js
- Add variable to bind object to object function

### 13-bind_user.js
- Add variable to bind function to unrelated object
	- Binding and closure
	- Test by:
		```
		bindLogWelcomeUser('Hello');
		```

### 14-wikipedia.js
- Add callback function to query wikipedia
	- Not working

## Learning Objectives
- What is lexical scoping in JavaScript
- What is closure in JavaScript
- How to use closure
- How to chain different closures
- How to simulate private methods with Closure
- The execution stack order with JavaScript
- How to use binding
- How to use callbacks
