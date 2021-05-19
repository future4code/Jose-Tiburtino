import { LinkedList, LinkedListNode } from "./ex1";

class Queue {
  constructor(public items: LinkedList = new LinkedList()) {}

  public isEmpty(): boolean {
    return this.items.start === null;
  }

  public enqueue(value: any): void {
    this.items.addToTail(value);
  }

  public dequeue(): LinkedListNode | null {
    if (this.items.start) {
      const firstNode:LinkedListNode | null = this.items.start;
      this.items.start = this.items.start.next;
      return firstNode;
    }
    return null;
  }
}

const queue: Queue = new Queue();
console.log(queue);
queue.enqueue("number1");
