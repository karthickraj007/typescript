let flag:string[] =  []
async function customer(){
   if(1 >= 1){
        flag.push("one")
        
   }
    
  return true  
}

async function customer1(){
    if(1 >= 1){
        flag.push("two")
        return false
   }

   return true
     
}

(async () => {
    await Promise.all([customer1(), customer()]).then((data)=>{
        console.log(data)
    });
    console.log(flag);
})();