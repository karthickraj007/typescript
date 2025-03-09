"use strict";
/*
    1)Interfaces are a powerful tool in TypeScript to define the structure of objects.
    2)Key Features of Interfaces:
        1)Property Definitions
        2)Optional Properties
        3)Readonly Properties
        4)Method Definitions
        5)Inheritance

*/
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    name1: "Alice",
    age1: 30,
    id: 12345,
    greet() {
        console.log("Hello, " + this.name1);
    },
};
user1.greet(); // Output: Hello, Alice
