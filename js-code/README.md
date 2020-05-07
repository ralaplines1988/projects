### Name Convention

1. JavaScript : **camelCasing** e.g. **camelCaseEverything**

### let or const

Think about whether you’ll need to reassign the variable later on. If you do need to reassign the variable use let, otherwise, use const

### operating order in js.

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
