const numberArray = [];

function addNumber() {
  const inputElement = document.querySelector(".js-input-numbers");

  const numbers = inputElement.value;

  numberArray.push(numbers);
  console.log(numberArray);
}

//rough function that takes array and number nad return the new array adding num
// function addNum(array, num) {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     result.push(array[i] + num);
//   }
//   return result;
// }
// console.log(addNum([1, 2, 3, 4], 8));

//min max function which takes an array and returns the min and max in the array
// function minMax(array) {
//   let min = 0;
//   let max = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] >= max) {
//       max = array[i];
//     } else if (array[i] <= min) {
//       min = array[i];
//     }
//   }
//   return `Min: ${min} and Max: ${max}`;
// }

// better way
// function minMax(array) {
//   const result = {
//     min: array[0],
//     max: array[0],
//   };

//   for (let i = 0; i < array.length; i++) {
//     const value = array[i];

//     if (result.min === null && value < result.min) {
//       result.min = value;
//     }

//     if (result.max === null && value > result.max) {
//       result.max = value;
//     }
//   }
//   return result;
// }

// console.log(minMax([1, -3, 5, 0]));
// console.log(minMax([-1, -3, -5, 10]));
// console.log(minMax([]));

// function that takes an array of strings and returns an object with how many times the strings appreared

function countWords(words) {
  result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    // Check if the word is not already in the `result` object.
    if (!result[word]) {
      result[word] = 1; // If the word is not in `result`, initialize its count to 1.
    } else {
      result[word]++; // If the word is already in `result`, increment its count.
    }
  }
  return result;
}

console.log(
  countWords(["apple", "pie", "banana", "sugar", "apple", "pie", "apple"])
);
