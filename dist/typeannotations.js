"use strict";
//1)primitive types
Object.defineProperty(exports, "__esModule", { value: true });
let k = 40;
let val = 'karthik';
let isMajor = false;
//2)reference types
//Array
let subject = ["Tamil", "English"];
let arr = [1, "karthik", true, null];
let emp = [{ name: 'abc', age: 22, city: 'chennai' }];
let emps = [{ name: 'abc', age: 22, city: 'chennai' }];
//3)Object
let obj = {
    name: 'karthik',
    age: 22,
};
let empDetails = {
    name: "Karthik",
    age: 25,
    city: "chennai"
};
console.log(empDetails);
//4)Tuple -> Tuple is nothing but array and it is fixed length and datatypes.
let empInfo = ['Karthik', 25, 'student'];
//empInfo = ['Karthik', 25, 'student', true]    //-> it throw error
//empInfo.push(true)     //-> it wont throw error
//5)enum ->An enum is a special type in TypeScript that defines a set of named constant values.
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let userRole = Role.Admin;
console.log(userRole); //-> 0
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["ServerError"] = 500] = "ServerError";
})(Status || (Status = {}));
console.log(Status.Success); // Output: 200
//6)Literal Type ->it allows you to specify exact values a variable can have instead of just a general type like string or number.
let status;
status = "success"; //allowed
status = "error"; //allowed
status = "pending"; //allowed
//status = "failed";   // Error: Type '"failed"' is not assignable
function setMode(mode) {
    console.log(`Mode set to ${mode}`);
}
setMode("light"); //Allowed
setMode("dark"); //Allowed
//setMode("blue");  //Error: Only "light" or "dark" is allowed
