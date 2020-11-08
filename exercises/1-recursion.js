/* RECURSIVE ALGORITHMS */

// factorial of a non-negative integer n 
function factorial(n){
  if(n==0) return 1;
  if(n>0) return factorial(n-1)*n;
}

// sums the first n integers of an array A
function sumOfIntegers(A, n){

}

module.exports = { factorial, sumOfIntegers }
