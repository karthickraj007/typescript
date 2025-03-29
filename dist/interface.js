"use strict";
/*
    1)interface is used to define the structure of an objects.
    2)interface can act like type.
    2)Key Features of Interfaces:
        1)Property Definitions
        2)Optional Properties
        3)Readonly Properties
        4)Method Definitions
        5)Inheritance

*/
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "Alice",
    age: 30,
    id: 12345,
    greet() {
        console.log("Hello, " + this.name);
    },
    getData() {
        return 'hello world!';
    }
};
user.greet(); // Output: Hello, Alice
class Admin {
    constructor(name, age, id, email) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("welcome " + this.name);
    }
    getData() {
        return "hello " + this.name;
    }
}
const admin = new Admin("karthik", 22, 7117, "karthik@gmail.com");
function displayMessage(admin) {
    admin.greet();
}
displayMessage(admin);
const sum = (x, y) => x + y;
console.log(sum(10, 20)); // Output: 30
