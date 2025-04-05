/*
    1)interface is used to define the structure of an objects.
    2)interface can act like type.
    3)Key Features of Interfaces:
        1)Property Definitions
        2)Optional Properties
        3)Readonly Properties
        4)Method Definitions
        5)Inheritance

*/

export interface User {
    name: string;         // A required string property
    age: number;          // A required number property
    email?: string;        // An optional string property
    readonly id: number;   // A readonly property
    greet(): void;         // A method that doesn't return anything
    getData():string
}

const user: User = {
    name: "Alice",
    age: 30,
    id: 12345,
    greet() {
        console.log("Hello, " + this.name);
    },
    getData(){
        return 'hello world!'
    }
};

user.greet();  // Output: Hello, Alice



class Admin implements User{
    
    name:string
    age:number
    constructor(name: string, age: number, public id: number, public email?: string){
       this.name = name
       this.age = age
    }

    greet(){
        console.log("welcome " + this.name)
    }

    getData(): string {
        return "hello " + this.name
    }
}

const admin:User = new Admin("karthik", 22, 7117, "karthik@gmail.com")


function displayMessage(admin:User){
    admin.greet()
}

displayMessage(admin)

//interface as function type

interface Add {
    (a: number, b: number): number; // Function type signature
  }
  
  const sum: Add = (x, y) => x + y;
  
  console.log(sum(10, 20)); // Output: 30


//Inheritance (Extending Interfaces)

interface Employee {
    name: string;
    id: number;
}

interface Manager extends Employee {
    department: string;
}

let manager: Manager = {
    name: "Sarah",
    id: 101,
    department: "HR"
};

console.log(manager.name); // Output: Sarah
