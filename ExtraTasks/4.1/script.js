class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class List{
    _length = 1;

    constructor(value){
        this.root = new Node(value);
    }

    get length(){
        return this._length;
    }

    addNode(value, i){
        let node = new Node(value);
        let count = 0;
        let currentNode = this.root;

        while(currentNode.next){

            if(i > this._length - 1){
                return false;
            }

            if (count === i){
                node.next = currentNode.next;
                currentNode.next = node;
                this._length++;
                return true;
            }

            currentNode = currentNode.next;
            count++;
        }

        currentNode.next = node;
        this._length++;
        return true;
    }

    remove(i){
        let count = 0;
        let currentNode = this.root;

        if (this._length === 1 || i + 1 > this._length){
            return false;
        }

        if (count === i){
            this.root = currentNode.next;
            this._length--;
            return true;
        }     

        while(count < this._length - 2){
            if (count === i - 1){
                currentNode.next = currentNode.next.next;
                this._length--;
                return true;
            }    
            currentNode = currentNode.next;
            count++;
        }

        currentNode.next = null;
        this._length--;
        return true;
    }

    print(){
        let result = [];
        let currentNode = this.root;

        while(currentNode){
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }

        alert(result.join(','));
    }
}

