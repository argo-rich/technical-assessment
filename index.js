
const startNum = 7;
const endNum = 120;
const allDivisorOutput = 'Rich';
const divisorMap = new Map();
divisorMap.set(3, 'Fizz');
divisorMap.set(5, 'Buzz');
divisorMap.set(7, 'Pop');


console.log(getFizzBuzz());

function getFizzBuzz() {
    let output = '';

    for (let i = startNum; i <= endNum; i++) {
        if (containsAllDivisors(i)) 
            output += allDivisorOutput + '\n';
        else if (isADivisor(i)) 
            output += getDivisorOutput(i) + '\n';
        else 
            output += i + '\n';
    }

    return output;
}

function isADivisor(num) {
    for (let div of divisorMap.keys())
        if (num % div === 0)
            return true;

    return false;
}

function containsAllDivisors(num) {
    for (let div of divisorMap.keys())
        if (num % div !== 0)
            return false;

    return true;
}

function getDivisorOutput(num) {
    let output = '';
    for (let div of divisorMap.keys())
        if (num % div === 0)
            output += divisorMap.get(div) + ' ';
    return output;
}