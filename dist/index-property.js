"use strict";
/*
    1)Index Signature
        An index signature allows an object to have dynamic keys without TypeScript throwing an error.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "John",
    role: "admin",
    city: "chennai"
};
console.log(user.role); // Output: admin
