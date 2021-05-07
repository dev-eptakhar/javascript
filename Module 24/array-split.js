const numbers = [1,2,3,4,5,6,7,8];
const part = numbers.slice(2, 5);
const remove = numbers.splice(2, 3);
const joins = numbers.join("ami");
console.log(joins)
console.log(remove);
console.log(part);
console.log(numbers)