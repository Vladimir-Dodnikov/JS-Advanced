class Stringer {
    innerString; //field a.k.a. property;
    innerLength; //automatic prop with implementation of the constructor
    constructor(name, length) {
        this.innerString = name;
        this.innerLength = length;
    }

    increase(value) {
        return this.innerLength += value;
    }
    decrease(value) {
        //return this.innerLength = Math.max(0, this.innerLength - value);
        return this.innerLength = this.innerLength - value > 0 ? this.innerLength - value : 0;
    }
    toString() {
        if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        }
        return `${this.innerString.substr(0, this.innerLength)}...`;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test