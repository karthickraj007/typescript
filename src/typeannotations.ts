//1)primitive types

let k : number = 40;

let val:string = 'karthik'

let isMajor:boolean = false

//2)reference types

//Array
let subject:string[] = ["Tamil", "English"]

let arr:any[] = [1, "karthik", true, null]

let emp:{}[] = [{name:'abc', age:22, city:'chennai'}]

let emps:{name:string, age:number, city:string}[] = [{name:'abc', age:22, city:'chennai'}]

//3)Object

let obj:{} = {
    name:'karthik',
    age:22,
}

let empDetails:{name:string, age:number, city:string} = {
    name: "Karthik",
    age: 25,
    city:"chennai"
}

console.log(empDetails)


//4)Tuple -> Tuple is nothing but array and it is fixed length and datatypes.
let empInfo:[string, number, string] = ['Karthik', 25, 'student']

//empInfo = ['Karthik', 25, 'student', true]    //-> it throw error

//empInfo.push(true)     //-> it wont throw error


//5)enum ->An enum is a special type in TypeScript that defines a set of named constant values
enum Role {
    Admin,
    User,
    Guest
}
let userRole: Role = Role.Admin;
console.log(userRole) //-> 0

enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500
  }
  
  console.log(Status.Success); // Output: 200


//6)Literal Type ->it allows you to specify exact values a variable can have instead of just a general type like string or number.

let status: "success" | "error" | "pending";

status = "success";  //allowed
status = "error";    //allowed
status = "pending";  //allowed
//status = "failed";   // Error: Type '"failed"' is not assignable


function setMode(mode: "light" | "dark") {
    console.log(`Mode set to ${mode}`);
  }
  
  setMode("light"); //Allowed
  setMode("dark");  //Allowed
  //setMode("blue");  //Error: Only "light" or "dark" is allowed
  