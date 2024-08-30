class Queue {
  constructor() {
    this.queue = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to rear of queue if not full
  // if full throw error
  enqueue(item) {
    if (this.isFull())
      throw new Error("Queue is full");

    this.queue.push(item);
  }

  // remove item from front of queue and return it
  dequeue() {
    return this.queue.shift();
  }

  // return item at front of queue without removing it
  peek() {
    if (this.isEmpty())
      return undefined;
    return this.queue[0];
  }

  // return true if queue is empty, otherwise false
  isEmpty() {
    return this.size() === 0;
  }

  // return true if queue is full, otherwise false
  isFull() {
    return this.size() === this.limit;
  }

  // return number of items in queue
  size() {
    return this.queue.length;
  }

  // return -1 if item not in queue, otherwise integer representing 
  // how far it is from the front
  search(target) {
    return this.queue.indexOf(target);
  }

  // print contents of queue: do not return the queue itself!
  print() {
    return "Queue: " + this.queue.join(', ');
  }
}

if (require.main === module) {
  // add your own tests in here
  const myQueue = new Queue();

  console.log("IsEmpty: ", myQueue.isEmpty());
  console.log("IsFull: ", myQueue.isFull());
  console.log("Peek: ", myQueue.peek());

  myQueue.print();
  myQueue.enqueue(10);
  myQueue.enqueue(20);
  myQueue.enqueue(30);
  myQueue.enqueue(40);
  myQueue.enqueue(50);
  myQueue.enqueue(60);
  myQueue.enqueue(70);
  myQueue.enqueue(80);
  myQueue.enqueue(90);
  myQueue.enqueue(100);
  // myQueue.enqueue(110);
  myQueue.print();

  console.log("Peek: ", myQueue.peek());
  console.log("IsEmpty: ", myQueue.isEmpty());
  console.log("IsFull: ", myQueue.isFull());
  console.log("Search 10: ", myQueue.search(10));
  console.log("Search 60: ", myQueue.search(60));
  console.log("Search 110: ", myQueue.search(110));

  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();

  console.log("IsEmpty: ", myQueue.isEmpty());
  console.log("IsFull: ", myQueue.isFull());
}

module.exports = Queue;
