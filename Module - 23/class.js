class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Hacker rank school";
    }
}
const student1 = new Student(11, "RudeX");
const student2 = new Student(12, "RudeU");
const student3 = new Student(13, "RudePlus");
console.log(student1, student2);
console.log(student1.name, student2.name)