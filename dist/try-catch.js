"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let k = 5;
if (k == 5) {
    try {
        throw new Error('failed');
    }
    catch (err) {
        console.log(err.message);
    }
}
console.log("coming");
