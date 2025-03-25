"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.student = student;
exports.math = math;
function student(num1, num2) {
    return num1 + num2;
}
const result = student(10, 20);
console.log(result);
function math(num1, num2) {
    console.log(num1 + num2);
}
math(10, 20);
