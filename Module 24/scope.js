const bonus = 20;
function sum(fNumber, sNumber) {
    let result = sNumber + fNumber + bonus;
    if (result > 9) {
        const mood = "happy";
        console.log(mood)
    }
    return result;
}
const output = sum(3, 7);
console.log(output)