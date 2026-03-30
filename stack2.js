class Stack2 {
    constructor () {
        this.items = [];
    };

    isEmpty () {
        return this.length === 0;
    };

    add(element) {
        this.items.push(element);
    };

    pop(element) {
        this.items.pop();
    };

    peek() {
        this.items[this.items.length - 1];
    };
}