class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this;
    }

    pop(){
        if (!this.head) return undefined

        let temp = this.head;
        let pre = this.head;

        while (temp.next) {
            pre = temp
            temp = temp.next
        }

        this.tail = pre
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }   
    


    unshift(value){
        const newValue = new Node(value);
        if (!this.head) {
            this.head = newValue;
            this.tail = newValue;
        } else {
            newValue.next = this.head
            this.head = newValue
        }

        this.length++
        return this;
    }

    print(){
        let newLength = this.length;
        let buffer = "";
        let newHead = this.head;

        while (newLength != 0) {
            if (newHead) {
                buffer += newHead.value + " -> "
                newHead = newHead.next;
            }
            newLength--
        }
        console.log(buffer)
    }

    // shift removes the first item and returns it
    shift() {
        if (!this.head) return undefined
        let buf = this.head
        this.head = this.head.next
        this.length--
        if (this.length == 0) {
            this.tail = null
        }
        buf.next = null
        return buf
    }
}


let myLinkedList = new LinkedList(0)

myLinkedList.push(1)
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(4)
myLinkedList.push(5)


myLinkedList.unshift(-1);

myLinkedList.print();


let shiftRes = myLinkedList.shift()
console.log("shift result = " + shiftRes.value)

myLinkedList.print()
