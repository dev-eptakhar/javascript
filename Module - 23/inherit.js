class Parent {
    constructor(){
        this.fathername = "TierLOO"
    }
}
class Child extends Parent{

    constructor(names){
        super();
        this.names = names
    }
    getFullName(){
        return `${this.names} ${this.fathername}`
    }
}
const nam = new Child("Ruder");
const nam2 = new Child("RuderPlus");
console.log(nam.getFullName(), nam2.getFullName());