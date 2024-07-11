class Queue{
    constructor(size) {
         this.capacity = size;
         this.queue = new Array(size).fill(null);
         this.front = -1;
         this.rear = -1;
    }

    isEmpty(){
        return this.front === -1;
    }

    isFull(){
        return (this.rear+1) % this.capacity === this.front;
    }
    enQueue(value){
        if(this.isFull()){
            console.log(`Queue is full`)
            return;
        }
        if(this.isEmpty()){
            this.front = 0;
        }
        this.rear = (this.rear +1) % this.capacity;
        this.queue[this.rear] = value;
    }

    deQueue(){
        if(this.isEmpty()){
            console.log(`Queue fully free`);
            return null;
        }
        if(this.front === this.rear){
            this.front = this.rear = -1;
        }else{
            this.front = (this.front + 1) % this.capacity;
        }

    }
    peek(){
        if(this.isEmpty()){
            console.log(`Queue empty`)
            return null
        }
        console.log(this.queue[this.front])
    }

    print(){
        if (this.isEmpty()) {
            console.log('Queue is empty');
            return;
        }
        let result = [];
        let i = this.front;
        while (true) {
            result.push(this.queue[i]);
            if (i === this.rear) break;
            i = (i + 1) % this.capacity;
        }
        console.log(result.join(' '));
    }
}

const cq = new Queue(5);

cq.enQueue(1);
cq.enQueue(2);
cq.enQueue(3);
cq.enQueue(4);
cq.enQueue(5);

cq.print(); // Output: 1 2 3 4 5

cq.deQueue();
cq.deQueue();

cq.print(); // Output: 3 4 5

cq.enQueue(6);
cq.enQueue(7);

cq.print();