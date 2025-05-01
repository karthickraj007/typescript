"use strict";
/*
    Symbol	          Name	                      Meaning
     !	          Non-null assertion	    “I’m sure it’s not undefined or null”
     ?.	          Optional chaining	        “Check if it exists first”
     ??	          Nullish coalescing	    “Use default if value is null or undefined”
*/
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: undefined,
    age: null,
    address: {
        city: "Delhi"
    }
};
//?. → Optional chaining
console.log((_a = user.address) === null || _a === void 0 ? void 0 : _a.city); //"Delhi"
//! → Non-null assertion
console.log(user.address.city);
//?? → Nullish coalescing
console.log((_b = user.name) !== null && _b !== void 0 ? _b : "Guest");
