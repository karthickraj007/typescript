/*
    1)Index Signature
        An index signature allows an object to have dynamic keys without TypeScript throwing an error.
*/

interface User {
    [key: string]: string
  }
  
  const user: User = {
    name: "John",
    role: "admin",
    city:"chennai"
  };
  console.log(user.role); // Output: admin
  