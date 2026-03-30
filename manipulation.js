// join, pop, push, splice, slice, filter, map, foreeach,shift, unshift,...


myArray = [1,2,3,4,5,6,7,8,9,10];

// console.log(myArray.join(''))

// myString = "Hello World";
// console.log(myString.split(""));


// function countletters() {

// const word = 'hello';
// const count = new Map();
//     for(let char of word) {
//       count.set(char, (count.get(char) || 0) + 1)
//     }
//     console.log(count.size);
    
// };


// countletters();

// console.log(myArray.pop())
// console.log(myArray.pop(myArray))

myArray2 = [ 'four', 'five', 'six'];

console.log(myArray2.some((value) => {
    return value.length == 6
}))