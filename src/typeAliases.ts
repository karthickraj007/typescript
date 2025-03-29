type employee = {name:string, age:number, city:string}

type addNum = (a: number, b: number) => number;

let empDetail:employee = {
    name: "Karthik",
    age: 25,
    city:"chennai"
}

const sum:addNum = (x, y) => x + y;
  
console.log(sum(10, 20));







