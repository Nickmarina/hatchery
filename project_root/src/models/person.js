class Person {
    constructor(state="active", uid="0-0"){
        this.state =state;
        this.uid = uid;
    }

    static counter = 1;

    static getCountOfPersons(){
        return this.counter+=1;
    };

    getState(){
        return this.state;
    };

    setState(newValue){
        if(newValue==="active" || newValue==="inactive"){
            this.state = newValue
            }else {
                throw new Error('invalid data');
            }
    };

    getUid(){
        return this.uid;
    };
}

module.exports=Person;
    // - getState() - return state
    // - setState(newValue) - sets the state to a new value
    //   - check that passed value is "active" or "inactive" otherwise, it throws an exception
    // - getUid() - return uid
    // - static getCountOfPersons() - return total count of created personse