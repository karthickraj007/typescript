"use strict";
/*
    Modifier	                             Description
    1)public	            Accessible from anywhere (default if no modifier is provided)
    2)private	            Accessible only within the class itself
    3)protected	            Accessible within the class and subclasses
    4)readonly	            Can be assigned only once and is not modifiable afterward
    5)static	            Belongs to the class, not to instances


*/
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, age) {
        this.name = '';
        this.name = name,
            this.age = age;
    }
    get getdata() {
        return this.name;
    }
    set newage(age) {
        if (age > 0) {
            this.age = age;
        }
        else {
            console.log("age must be greater then zero");
        }
    }
}
let obj1 = new User('karthik', 22);
console.log(obj1);
obj1.newage = -20;
console.log(obj1);
