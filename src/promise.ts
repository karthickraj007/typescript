/*
    States of a Promise
        1)Pending
            The promise is still in progress — the async task hasn’t finished yet.
        2)Fulfilled(reslove)
            The promise was completed successfully — resolve() was called.
        3)Rejected
            The promise failed — reject() was called due to some error or condition.
        4)Settled
            The promise is done — it's either fulfilled(resolve) or rejected, but not pending anymore.
*/


//1)Promise.all()
let reachA  = new Promise((resolve, reject)=>{
    let reached = true
    if(reached){
        setTimeout(resolve, 3000, "karthk is reached")
    }
    else{
        reject("karthik is not reached")
    }
})

let reachB  = new Promise((resolve, reject)=>{
    let reached = true
    if(reached){
        setTimeout(resolve, 3000, "ram is reached")
    }
    else{
        reject("ram is not reached")
    }
})

let reachC  = new Promise((resolve, reject)=>{
    let reached = false
    if(reached){
        setTimeout(resolve, 3000, "krish is reached")
    }
    else{
        reject("krish is not reached")
    }
})

Promise.all([reachA, reachB, reachC]).then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})