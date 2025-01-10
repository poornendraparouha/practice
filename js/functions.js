// // Named functions
// function sum (a, b ){
//     let c = a + b;
//     return c;
//     // console.log (c);
// }
// result = sum(5, 8);


// // anonymous function 
// console.log(function (a, b){
//     return a * b;
// }(8, 6))

// // function expression with anonymous function
// let multiply = function(a, b){
//     return a * b
// }
// console.log(multiply(5,8))

// // function expression with named functions
// let multiply = function devide(a, b){
//     return a / b
// }
// console.log(multiply(48,8))

// // arrow functions with two paeameters
// let abc = (a, b ) => a + b;
// console.log(abc(4, 5))

// // arrow functions  with one parameter
// let abc = (x) => {
//     return x * x
// }
// console.log(abc(4))

// // callback functions 
// function add ( a, b ){
//     return a + b;
// }
// function subtract ( a, b ){
//     return a - b;
// }
// function devide ( a, b ){
//     return a / b;
// }
// function multiply ( a, b ){
//     return a * b;
// }

// function display(x, y, operations){
//     var result = operations(x, y);
//     console.log(result);
// }
// display(10, 5, add)
// display(10, 5, subtract)
// display(10, 5, multiply)
// display(10, 5, devide )

// // Curried version of the multiply function
// function multiply(a) {
//     return function(b) {
//       return a * b;
//     };
//   }
  
//   const multiplyBy2 = multiply(2);  // Returns a function that multiplies by 2
//   console.log(multiplyBy2(3));      // Output: 6
  
// // Curried function that adds three numbers
// function add(a) {
//     return function(b) {
//       return function(c) {
//         return a + b + c;
//       };
//     };
//   }
//   console.log(add(2)(3)(4));  // Output: 9
  