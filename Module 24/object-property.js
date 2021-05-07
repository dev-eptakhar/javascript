const student = [
    {id: 21, name: 'Eiden Bole'},
    {id: 26, name: 'Rudder Bore'},
    {id: 30, name: 'Kten Kor'},
    {id: 35, name: 'Pittra Diygon'}
];
const namea = [];
for (let i = 0; i < student.length; i++) {
    const element = student[i];
    let names = student[i].name;
    namea.push(names)
}
//console.log(namea)

const namex = student.map(s => s.name );
console.log(namex)
const ids = student.filter(s => s.id);
console.log(ids)