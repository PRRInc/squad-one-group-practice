/**
 * Calculates the total area of rectangles given an array of rectangle dimensions.
 *
 * @param {number[][]} rectangles - An array of rectangles, where each rectangle is represented by [length, width].
 * @returns {number} - The total area of all rectangles.
 */

const rectangleSizesArry = [[10, 15], [3, 20,], [7, 9], [4, 4], [3, 3]];

function calculateTotalArea(rectangles) {
    return rectangles.reduce((acc, currVal) => acc + currVal[0] * currVal[1], 0);
  }
  
  console.log(calculateTotalArea(rectangleSizesArry));
  /**
   * Finds and returns the largest element in an array of numbers.
   *
   * @param {number[]} numbers - The array of numbers.
   * @returns {number|null} - The largest element or null if the array is empty.
   */
  function findLargestElement(numbers) {
    return Math.max(...numbers)
  }
  let arr = [1,50,30,12,56]
  let num = findLargestElement(arr)
  console.log(num);
  /**
   * Checks if a given string is a palindrome.
   *
   * @param {string} inputString - The input string to check.
   * @returns {boolean} - True if the string is a palindrome, false otherwise.
   */
  function isPalindrome(inputString) {
    return inputString === (inputString.split("").reverse().join("")) ? true : false;
  }
  
  /**
   * Counts the occurrences of a specific element in an array.
   *
   * @param {Array} array - The array of elements.
   * @param {*} targetElement - The element to count occurrences of.
   * @returns {number} - The number of occurrences of the target element.
   */
  function countOccurrences(array, targetElement) {
    // Implementation is intentionally omitted in this file.
  }
  
  /**
   * Merges two sorted arrays into a new sorted array.
   *
   * @param {number[]} arr1 - The first sorted array.
   * @param {number[]} arr2 - The second sorted array.
   * @returns {number[]} - The merged and sorted array.
   */
  
  let firstNums = [1, 4, 3, 6, 5];
  let secondNums = [5, 9, 7, 8, 4];
  
  function mergeSortedArrays(arr1, arr2) {
    return (arr1.sort().concat(arr2.sort())).sort();
  }

  console.log(mergeSortedArrays(firstNums, secondNums));

  
  /**
   * Calculates the factorial of a non-negative integer.
   *
   * @param {number} n - The non-negative integer.
   * @returns {number} - The factorial of the given number.
   */
  function calculateFactorial(n) {
    // Implementation is intentionally omitted in this file.
  }
  