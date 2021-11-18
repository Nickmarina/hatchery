const Person = require('./person');
const Human = require('./human');

class Uuee extends Person{
    constructor(owner, state, uid){
        super(state, uid);

        if (owner instanceof Human) this.owner=owner;
    };

    sayHello(caller){
        return caller===this.owner ?`Hello ${this.owner.name}.` : 'No!';
    };
}

module.exports=Uuee;

//  Uuee - inherits from Person
//  - constructor accepts three parameters: owner, state, uid
//  - check that owner is instance of Human otherwise, it throws an exception
//  - methods:
//    - sayHello(caller) - if the caller is the owner: return "Hello {ownerName}." otherwise return "No!"
