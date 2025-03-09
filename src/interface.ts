/*
    1)Interfaces are a powerful tool in TypeScript to define the structure of objects.
    2)Key Features of Interfaces:
        1)Property Definitions
        2)Optional Properties
        3)Readonly Properties
        4)Method Definitions
        5)Inheritance

*/

interface User1 {
    name1: string;         // A required string property
    age1: number;          // A required number property
    email?: string;        // An optional string property
    readonly id: number;   // A readonly property
    greet(): void;         // A method that doesn't return anything
}

const user1: User1 = {
    name1: "Alice",
    age1: 30,
    id: 12345,
    greet() {
        console.log("Hello, " + this.name1);
    },
};

user1.greet();  // Output: Hello, Alice
