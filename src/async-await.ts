function BookTicket(amount:number){
    return new Promise((reslove, reject)=>{
        if(amount){
            setTimeout(()=>{
                reslove('ticket is booked')
            },5000)
           
        }
        else{
            reject('ticket booking is failed')
        }
        
    })
}

async function customer(amount:number){
    try{
        console.log("start")
        const result  = await BookTicket(amount)
        console.log(result)
        console.log("end")
        return result
    }
    catch(err){
        console.log(err)
    }
    
}

customer(100).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})






