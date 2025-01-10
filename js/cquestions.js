// // 1. Reverse a String
// // Problem: Write a function to reverse a given string without using built-in reverse functions.

// // using for loop
// function reverseString(str){
//     let reversed = " ";
//     for (let i = str.length -1 ; i >= 0; i--){
//         reversed += str[i];
//     }
//     return reversed;
// }
// console.log(reverseString("Happy Interview"));

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("Happy Interview"))


// // 2. Find the Largest string in an Array
// // Problem: Given an string, find the largest string.


// function findLongestWord(sentense){
//     // split the sentense into the array of words
//     const words = sentense.split(" ");
//     let longestWord = "";
//     // itrate through each word in the array
//     for(let word of words){
//         // check if the word is longer then the current longest word
//         if(word.length > longestWord.length){
//             longestWord = word;
//         }
//     }
//     return longestWord
// }
// console.log(findLongestWord("i love coding in javascript"));


// // 3. FizzBuzz
// // Problem: Print numbers from 1 to 100, but for multiples of 3, print "Fizz", for multiples of 5, print "Buzz", and for numbers that are multiples of both 3 and 5, print "FizzBuzz".

// for (let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     }else if( i % 3 === 0){
//         console.log("Fizz");
//     } else if( i % 5 === 0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// };

// 4. Palindrome Check
// Problem: Check if a given string is a palindrome (reads the same forward and backward).

// function isPelindrome (str){
//     // reversed the string
//     const reverseStr = str.split(" ").reverse().join(" ");
//     // check the reversed string with the string
//     return str === reverseStr
// }
// console.log(isPelindrome("racecar"))


// 5. Remove Duplicates from an Array
// Problem: Remove duplicates from an array.

// using set
// function removeDuplicate(arr){
//     return [...new Set(arr)]
// }
// console.log(removeDuplicate([1, 7, 5, 8, 8, 9, 5, 3]));

// // using for loop
// function removeDuplicate(arr){
//     // empty array to store unique elements
//     const uniqueElements = [];
//     // loop through the input array
//     for(let i = 0; i < arr.length; i++){
//         // check if the current element already in the uniqueElements array
//         if(uniqueElements.indexOf(arr[i]) === -1){
//             uniqueElements.push(arr[i]);
//         }
//     }
//     return uniqueElements;
// }
// console.log(removeDuplicate([1, 7, 5, 8, 8, 9, 5, 3]));

// // 6. Validate an Anagram
// // Problem: Check if two strings are anagrams of each other (i.e., they contain the same characters in the same frequency).

// function isAnagrams(str1, str2){
//     // split the strings into array of characers
//     // sort the characters into each array
//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');
//     // compare the sorted strings
//     return sortedStr1 === sortedStr2;
//     // return str1.split('').sort().join('') === str2.split('').sort().join(''); // it also gives same result
// }
// console.log(isAnagrams('silent', "listen"));

// // 7. Count Vowels in a String
// // Problem: Given a string, count the number of vowels (a, e, i, o, u) in it.
// function countVowels(str){
//     let vowels = "aeiouAEIOU";
//     return [...str].filter(char => vowels.includes(char)).length;
// }
// console.log(countVowels("Hello World"))


// function countVowels(str){
//     let vowels = ["a", "e", "i", "o", "u"];
//     let count = 0;
//     // itrate through each character in the string
//     for(let char of str.toLowerCase()){
//         // check if the character is vowel
//         if(vowels.includes(char)){
//             // if true incrementing the count
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("Hello World"))

// // 8. Find the Largest Number in an Array
// // Problem: Given an array of numbers, find the largest number.

// // function findLargestNumber(arr){
// //     return Math.max(...arr)
// // }
// // console.log(findLargestNumber([10,14,14,17,19,99,66,44,88,76,54]))

// // using for loop
// function findLargestNumber(arr){
//     // set the initial largest element to the first element of the array 
//     let largest = arr[0];
//     // itrate through the array and update the largest element if the element is found
//     for(let i = 1; i <= arr.length; i++){
//         if (arr[i] > largest){
//             largest = arr[i]
//         }
//     }
//     // return the largest element
//     return largest;
// }
// console.log(findLargestNumber([10,14,14,17,19,99,66,44,88,76,54]))

// // 9. Find Prime Numbers
// // Problem: Write a function to find all prime numbers up to a given number n.

// // function for knowing prime or not
// function isPrime(number){
//     // numbers less then 2 is not prime
//     for(let i = 2; i <= number/2; i++){
//         // remainder must not be zero to the prime
//         if (number % 2 === 0){
//             // number is divisible by hence not prime
//             return false;
//         }
//     }
//     // number is prime
//     return true;
// }
// console.log(isPrime(10));

// // function for printing prime numbers for given n number
// function findPrimes(number){
// let primes = [];
// for(let i = 2; i <= number; i++){
//     if(isPrime(i)){
//         primes.push(i);
//     }
// }
// return primes;

// function isPrime(num){
//     for(let i = 2; i <= Math.sqrt(num); i++ ){
//         if (num % i === 0){
//             return false;
//         }
//     }
//     return true;
//   }
// }
// console.log(findPrimes(100))

// // 9. Find Factorial	
// // Problem: Calculate the factorial of a given number n.

// function factorial(num){
//     if(num === 0){
//         return 1;
//     }
//     return num * factorial(num -1);
// }
// console.log(factorial(5))

// // // by using for loop
// // function factorial(num){
// //     if (num === 0){
// //         return 1;
// //     }
// //     let factorial = 1;
// //     for(let i = 1; i <= num; i++){
// //         factorial *= i;
// //     }
// //     return factorial;
// // }
// // console.log(factorial(5))

// // 10. write a program to remove all whitespace characters from a string
// function removeWhiteSpaces(str){
//     const result = str.replace(/\s/g, "")
//     return result;
// }
// console.log(removeWhiteSpaces("hello,      dear raghav"));

