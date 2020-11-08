# Recursion

A nice little warm up to the morning

---

## Definition: recursion

- Base case
- Sequence of calls progressing towards (and terminating at) base case

---

## Factorial function

factorial(4) = 4! = 4 x 3 x 2 x 1
factorial(11) = 11! = 11 x 10 x 9 x ... x 2 x 1
factorial(1) = 1! = 1

special case:
factorial(0) = 0! = 1 

(not defined for negative numbers)

---

### Example: Factorial function

Mathematical definition.

factorial(0) = 1   (base case)
factorial(n) = factorial(n-1)*n (for any number n bigger than 0)

--- 

### Code: factorial function

```
function factorial(n){
  if(n==0) return 1;
  if(n>0) return factorial(n-1)*n;
}
```

---

### Recursion trace: factorial function

See picture
- helpful for debugging and problem solving

---

## Your turn

Write a recursive function ```sumArray(A, n)``` that adds the first ```n``` numbers in an array of integers ```A```. 

Note: (Do not use a for loop. Should call ```sumArray(n-1)``` inside your function)

Note: there is a tests folder, which can be run using ```npm test```, but you may want to add ```test.only``` to the test to reduce noise as jest will run all the tests.

Hint: If you get stuck, try to draw the recursion trace, with an example.
Note: this problem is a little tricky to get right with the indexes.

---

### Pseudocode

- Write logic of code without language specific implementation.

--- 

### Pseudocode solution sumArray(A, n)

```
linearSum(A, n){
  if (n=1) return A[0]
  else return LinearSum(A, n-1)+A[n-1]
}
```

---

## Final notes:

- recursion is not always the best solution, can be risky, and take up a
lot of space if not used in the right
situation, but helpful in some cases.
- can usually convert a recursive function into an iterable one.
- there's lots more to learn about recursion....

--- 

## Suggested research topics:

- practice some more recursive algorithms: e.g. algorithm to reverse elements of an array between 
index i and j.
- binary recursion (and multiple recursion)
- power sequences and different implementations (which is best?)
- fibonnaci sequences and different implementations (which is best?)

---