/*
    Symbol	          Name	                      Meaning
     !	          Non-null assertion	    “I’m sure it’s not undefined or null”
     ?.	          Optional chaining	        “Check if it exists first”
     ??	          Nullish coalescing	    “Use default if value is null or undefined”
*/

let user = {
    name: undefined,
    age: null,
    address: {
      city: "Delhi"
    }
  };

//?. → Optional chaining
console.log(user.address?.city); //"Delhi"

//! → Non-null assertion
console.log(user.address!.city);

//?? → Nullish coalescing
console.log(user.name ?? "Guest");