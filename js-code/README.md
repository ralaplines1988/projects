From top to bottom, if don't consider hoist.

**Hoisting** is JavaScript's default behavior of moving all declarations to the top of the current **scope** (to the top of the current script or the current function).

### Name Convention

1. JavaScript : **camelCasing** e.g. **camelCaseEverything**

### ES6 - ES2015

1. let, const, String Interpolation.
2. Object Oriented Programming (OOP).
3. Understanding ES6 is necessary for using popular framework like React.
4. [Babel](https://babeljs.io/docs/en/config-files)

### About variable
* JavaScript allows variable declaration without `var` keyword. You must assign a value when you declare a variable without var keyword, it's identified by the assignment operator, and by this way, the variable would be a global variable, even if it's declared in a function.
* only the var can be hoisted, and only the label, it's value would be `undefined` .
* Variables hold reusable data in a program and associate it with a name.
* Variables are stored in memory.
* The `var` keyword is used in pre-ES6 versions of JS.
* `let` is the preferred way to declare a variable when it can be reassigned, and `const` is the preferred way to declare a variable with a constant value.

* Mathematical assignment operators (`+=, -=, *=, /=`) make it easy to calculate a new value and assign it to the same variable.

### let or const

Think about whether you’ll need to reassign the variable later on. If you do need to reassign the variable use let, otherwise, use const

### String Interpolation - template literals

```
const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.
```
Start the interpolation with a backtick and then end with another backtick.
Placeholder `${myPet}` insert the value of myPet into the template literal. 

One of the biggest benefits to using template literals is the readability of the code. Using template literals, you can more easily tell what the new string will be. You also don’t have to worry about escaping double quotes or single quotes.

### Operating order in js.

Depanding on diffrent operator, some of them are right to left, or left to right.

### Understanding how to read syntax on MDN

Every word in brackets means it is a option.
```
console.log(obj1 [, obj2, ..., objN]);
console.log(msg [, subst1, ..., substN]);
```

### Postfix and Prefix about Increment (++)

* If used postfix, with operator after operand (for example, x++), then it increments and returns the value before incrementing.
* If used prefix, with operator before operand (for example, ++x), then it increments and returns the value after incrementing.


```
// Postfix 
var x = 3;
y = x++; // y = 3, x = 4 return operand first, so the value of y is 3.

// Prefix
var a = 2;
b = ++a; // a = 3, b = 3 execute operator first, so value of b is 3.
```

### About function 

Function parameters are considered as local variables.

### Arrow function 

Arrow functions are not just simply syntactical re-writes. As with other ES6 features, there are other underlying benefits and tradeoffs to consider.


### Conditionals
```
if (true) {
  console.log('This message will print!'); 
} 
```
You can put anything into the conditional statement as long as the return value of the anything is either true or false(include truthy or falsy value). So you could almost put every thing in the statement.
Block statement a set of curly braces`{}`
Truthy vs falsy values
