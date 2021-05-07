//array niya chele khala
/*
1 => map
2 => filter
3 => foreach
4 => reduce

ES6

5 => find 

*/



const numbers = [3, 4, 5, 6, 7];
const squareNumber = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const square = element * element;
    squareNumber.push(square);
}

function square(element){
    return element*element;
}

const arrowSquare = element => element * element;

const rsult = numbers.map(function square(element){
        return element * element;
    })

const arrowResult = numbers.map(x => x * x);
console.log(squareNumber)
console.log(arrowResult)

const bigger = numbers.filter(x => x < 5)
console.log(bigger)


