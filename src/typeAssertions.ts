/*
    1)typeAssertions
        it is mechanism that allow you to tell the compiler to treat a value as having specific type.

*/


type newStudent = {name:string, age:number, gender:string}[]

//database data
let studentData:{name:string, age:number, gender:string}[] = [{name:'karthik', age:22, gender:'male'}]


let newstudentData:newStudent = studentData as newStudent
console.log(newstudentData[0])




