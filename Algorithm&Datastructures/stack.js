// Stacks 

// functions: push, pop, peek, length 
// word spelt the same forward and backward

var letters = [];

var word = 'racecar';

var rword = "";

// put ltters of word into stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}


// pop off the stack in reverse order 
for(var i = 0; i < word.length; i++) {
    rword += letters.pop();
};

if(rword === word) {
    console.log(`${word} is a palindrome`)
} else {
    console.log(`${word} is not a palindrome`)
}



// how to implement stack 

// var myStack = function() {
//     this.count = 0;
//     this.storage = {};

//     // ADDss the value at the end of the stack
//     this.push = function(value) {
//         this.storage[this.count] = value;
//         this.count++
//     }

//     // Remove and return the value at teh end of the stack 

//     this.pop = function () {
//         if(this.count === 0) {
//             return undefined;
//         };

//         this.count--;
//         var result = this.storage[this.count];
//         delete this.storage[this.count];
//         return result;
//     }

//     this.size = function() {
//         return this.count;
//     };

//     // REturns the value at the end of the stack 
//     this.peek = function() {
//         return this.storage[this.count - 1]
//     }
// }

// myStack.push(1);
// myStack.push(2);
// console.log(myStack.peek)



class Stack  {

    constructor() {
        this.count = 0;
        this.storage = {};
    };



    // adding element on top/bottom
    add(element) {
        this.storage[this.count] = element;
        this.count++;
    }

    // poppint element off the stack
    pop() {
        this.storage[this.count] - 1;
        this.count--;
    };

    // peek, return the element deleted
    peek() {
        return this.element[this.count - 1];
    };




}

var stack = new Stack();

stack.add(1);
stack.add(2);
stack.add(3);
stack.pop();
stack.peek();

console.log(stack)
console.log(stack.element)