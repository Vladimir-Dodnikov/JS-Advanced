class List {
    constructor() {
        this.collection = [];
        this.size = 0
    }
    add(element) {
        this.collection.push(+element);
        this.size = this.collection.length;
        return this.collection.sort((a, b) => a - b);
    }
    remove(index) {
        if (index >= 0 && index <= this.collection.length) {
            this.collection.splice(index, 1);
            this.size = this.collection.length;
            return this.collection.sort();
        }
    }
    get(index) {
        if (index >= 0 && index <= this.collection.length) {
            return this.collection[index];
        }
    }
}

var myList = new List();

// Generate random list of 20 numbers
var expectedArray = [];
for (let i = 0; i < 20; i++) {
    expectedArray.push(Math.floor(Math.random() * 200) - 100);
}
// Add to collection
for (let i = 0; i < expectedArray.length; i++) {
    myList.add(expectedArray[i]);
}
console.log(myList);