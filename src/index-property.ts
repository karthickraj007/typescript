/*
    1)Index Signature
        An index signature allows an object to have dynamic keys without TypeScript throwing an error.
*/

interface User {
    name: string;
    age: number;
    [key: string]: string | number; 
  }
  
  const user: User = {
    name: "John",
    age: 25,
    role: "admin",
    city:"chennai"
  };
  console.log(user.role); // Output: admin
  