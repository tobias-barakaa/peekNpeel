class Mystack {

  constructor() {
    this.items = [];
}


//push to list on top of the array(stack)/add 

 add(element) {

  if(isEmpty) {
   return undefined;
} else {
   this.items.push(element)
};
  

}

  // remove the element on top of the stack;

  pop(element) {
   if(isEmpty) {
  return undefined;
} else {
  this.items.pop();
}
}


   
   isEmpty() {
  return this.length === 0;
}

};


var stack = new Mystack()

stack.push(3);
stack.push(4);
stack.pop();
