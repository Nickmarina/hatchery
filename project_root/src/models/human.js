const Person = require("./person");

class Human extends Person{
    constructor(name, age, state, uid){
        super(state, uid);
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    };

    sayHello(){
        return  `Hello from: ${this.name}.`
    }

}
module.exports=Human;
// Human - inherits from Person
// - constructor accepts four parameters: name, age, state, uid
// - methods:
//   - getName() - return name
//   - sayHello() - return: "Hello from {humanName}."