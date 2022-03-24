// До конца не доделал, постараюсь доделать ко дню обсуждения ДЗ

class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class List{
    length = 0;

    constructor(value){
        this.root = new Node(value);
    }

    addNode(value, i){
        let middle;
        let node = new Node(value);
        let count = 0;
        let currentNode = this.root;

        while(currentNode.next){
            if (count === i){
                middle = currentNode.next;
                break;
            } else if(i > count){
                return false;
            }
            currentNode = currentNode.next;
            count++
        }

        this.length++;
        currentNode.next = node;
        currentNode.next.next = middle;
        return true;
    }

    remove(i){
        let middle;
        let count = 0;
        let currentNode = this.root;

        while(currentNode.next){
            if(count === i - 1){
                middle = currentNode.next;
                break;
            } 
            if(count === this.length - 1){
                break;
            }           
            currentNode = currentNode.next;
            count++;
        }

        if(middle){
            currentNode.next = middle;
            this.length--;
            return true;
        }
        currentNode.next = null;
        this.length--;
        return true;
    }
}

