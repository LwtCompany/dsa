class Stack {
    constructor(size) {
        this.capacity = size;
        this.top = -1;
        this.stack = [];
    }

    set push(value){
        this.stack.push(value);
        this.top = this.stack.length - 1;
        console.log(`Element added ${value}`)
    }

    get pop(){
        const removed = this.stack.pop();
        this.top = this.stack.length - 1;
        console.log(`Element removed ${removed}`)
    }

    get isEmpty(){
        console.log(this.top === -1);
    }

    get last(){
        console.log(this.stack[this.top]);
    }
    get isFull(){
        console.log(this.capacity -1 === this.top);
    }
    get printStack(){
        for(let item of this.stack){
            console.log(item)
        }
    }
}

const myStack = new Stack(3);
myStack.isEmpty;
myStack.push = 1;
myStack.push = 6;
myStack.push = 3;
myStack.printStack
myStack.isFull;
myStack.isEmpty;
myStack.pop;
myStack.last;