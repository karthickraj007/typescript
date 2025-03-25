"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor() {
    }
    static getInstance() {
        if (Person._instance) {
            return this._instance;
        }
        Person._instance = new Person();
        return Person._instance;
    }
}
exports.Person = Person;
const person1 = Person.getInstance();
const person2 = Person.getInstance();
console.log(person1 === person2);
