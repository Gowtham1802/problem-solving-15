// 1.Write a JavaScript function isPrime(n) that takes an integer n as input and returns true if n is a
// prime number, and false if it is not.
// Test Case:
// console.log(isPrime(15)); // Should return false
// console.log(isPrime(23)); // Should return true
// console.log(isPrime(1)); // Should return false


function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(17)); 
console.log(isPrime(32)); 
console.log(isPrime(3));  





// 2.Write a JavaScript function reverseString(str) that takes a string str as input and returns the
// reverse of the string.
// Test Case:
// console.log(reverseString(&quot;JavaScript&quot;)); // Should return &quot;tpircSavaJ&quot;
// console.log(reverseString(&quot;12345&quot;)); // Should return &quot;54321&quot;
// console.log(reverseString(&quot;&quot;)); // Should return &quot;&quot;



function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("Gowtham Thangaraj")); 
console.log(reverseString("1!2@3#4$5%6^7&8*9"));      
console.log(reverseString(""));    



// 3.Write a JavaScript function calculateFactorial(n) that calculates the factorial of a non-negative
// integer n.
// Test case:
// console.log(calculateFactorial(5)); // Should return 120
// console.log(calculateFactorial(0)); // Should return 1



function calculateFactorial(n) {

  if (n === 0) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
}

console.log(calculateFactorial(7)); 
console.log(calculateFactorial(0)); 




// 4.Write a JavaScript function isPalindrome(str) that checks if a given string str is a palindrome
// (reads the same forwards and backwards).
// Test Case:
// console.log(isPalindrome(&quot;Hello, World!&quot;)); // Should return false
// console.log(isPalindrome(&quot;A man a plan a canal Panama&quot;)); // Should return true



function isPalindrome(str) {

  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  const reversedStr = cleanStr.split('').reverse().join('');

  return cleanStr === reversedStr;
}

console.log(isPalindrome("Hello, World!"));            
console.log(isPalindrome("A man a plan a canal Panama")); 




// 5.Write a JavaScript function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a
// given string str.
// Test Case:

// console.log(countVowels(&quot;The quick brown fox&quot;)); // Should return 5
// console.log(countVowels(&quot;Rhythm&quot;)); // Should return 0



function countVowels(str) {
  str = str.toLowerCase();

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Skill Safari is Best Coaching Center")); 
console.log(countVowels("Rgd gl")); 




// 6.Write a JavaScript function findMax(arr) that finds and returns the maximum number in an array
// arr.
// Test Case:
// console.log(findMax([9, 23, 5, 17, 11])); // Should return 23
// console.log(findMax([-1, -5, -2, -8, -3])); // Should return -1



function findMax(arr) {
  if (arr.length === 0) {
    return null; 
  }

  let max = arr[0]; 

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMax([9, 23, 5, 17, 11, 27, 33, 77]));  
console.log(findMax([-0, -5, -2, -8, -3, -1, -9, -7]));




// 7.Write a JavaScript function reverseWords(str) that reverses the order of words in a given string
// str.
// Test Case:
// console.log(reverseWords(&quot;A B C D E&quot;)); // Should return &quot;E D C B A&quot;
// console.log(reverseWords(&quot;SingleWord&quot;)); // Should return &quot;SingleWord&quot;



function reverseWords(str) {
  const words = str.split(' ');

  const reversedWords = words.reverse();

  return reversedWords.join(' ');
}

console.log(reverseWords("A B C D E F G"));     
console.log(reverseWords("BeautifulWord"));   




// 8.Write a JavaScript function isLeapYear(year) that determines whether a given year year is a leap
// year. A leap year is divisible by 4, but not divisible by 100 unless it is also divisible by 400.
// Test Case:
// console.log(isLeapYear(2100)); // Should return false
// console.log(isLeapYear(2000)); // Should return true
// console.log(isLeapYear(2022)); // Should return false




