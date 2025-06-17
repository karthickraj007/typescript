"use strict";
/*
    1)States of a Promise
        1)Pending
            The promise is still in progress — the async task hasn’t finished yet.
        2)Fulfilled(reslove)
            The promise was completed successfully — resolve() was called.
        3)Rejected
            The promise failed — reject() was called due to some error or condition.
        4)Settled
            The promise is done — it's either fulfilled(resolve) or rejected, but not pending anymore.

    2)Promise method
        1)Promise.all
            1)Promise.all() is a JavaScript function that lets you run multiple promises at the same time, and wait for all of them to finish.
            2)Even if one promise fails return that promise, other promises do not stop executing.
            3)But Promise.all does not care about them anymore once one fails.
*/
Object.defineProperty(exports, "__esModule", { value: true });
//1)Promise.all()
let reachA = new Promise((resolve, reject) => {
    let reached = true;
    if (reached) {
        setTimeout(resolve, 3000, "karthk is reached");
    }
    else {
        reject("karthik is not reached");
    }
});
console.log(reachA);
let reachB = new Promise((resolve, reject) => {
    let reached = true;
    if (reached) {
        setTimeout(resolve, 3000, "ram is reached");
    }
    else {
        reject("ram is not reached");
    }
});
let reachC = new Promise((resolve, reject) => {
    let reached = false;
    if (reached) {
        setTimeout(resolve, 5000, "krish is reached");
    }
    else {
        reject("krish is not reached");
    }
});
Promise.all([reachA, reachB, reachC]).then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log(err);
});
