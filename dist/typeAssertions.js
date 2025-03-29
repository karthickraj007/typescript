"use strict";
/*
    1)typeAssertions
        it is mechanism that allow you to tell the compiler to treat a value as having specific type.
    2)summary
        1)It only tells the TypeScript compiler to treat the value as a specific type during compile-time.
        2)it does NOT change the actual value or type at runtime.

*/
Object.defineProperty(exports, "__esModule", { value: true });
let someValue = "TypeScript";
let length = someValue.length; // Without this, TypeScript doesn't know it's a string
