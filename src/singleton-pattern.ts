export class Person{
    private static _instance:Person
    constructor(){

    }

    static getInstance(){
        if(Person._instance){
            return this._instance
        }

        Person._instance =  new Person()
        return Person._instance
    }
}

const person1:Person  = Person.getInstance()
const person2:Person = Person.getInstance()

console.log(person1 === person2) //true




