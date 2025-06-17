let k = 5

if(k == 5){
    try{
        throw new Error('failed');
    }
    catch(err:any){
        console.log(err.message)
    }
    
}

console.log("coming")