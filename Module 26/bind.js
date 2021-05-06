const bigPerson = {
    firstName : "Bill",
    lastName : "Guest",
    sallary : 20000,
    fullName : function(){
        this.fullName = this.firstName + this.lastName;
        return this.fullName;
    },
    //tax sallary 7%
    monthlyTax : function(tax = 0.07){
        console.log(this)
        const taxValue =this.sallary * tax
        this.sallary =  this.sallary - taxValue;
        return this.sallary;
    }
}
const bigTakaola = {
    firstName : "elon",
    lastName : "mask",
    sallary : 100000
}
const totalTax = bigPerson.monthlyTax.bind(bigTakaola);
totalTax()
totalTax(0.03)
console.log(bigTakaola.sallary)
/* console.log(Math.floor(totalTax)) */