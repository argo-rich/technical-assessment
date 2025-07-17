
import { cg } from "./fizz-buzz-config.js";


export function getFizzBuzz() {
    let output = '';

    for (let i = cg.startNum; i <= cg.endNum; i++) {
        if (containsAllDivisors(i)) 
            output += cg.allDivisorOutput + '\n';
        else if (isADivisor(i)) 
            output += getDivisorOutput(i) + '\n';
        else 
            output += i + '\n';
    }

    return output;
}

function containsAllDivisors(num) {
    for (let div of cg.divisors)
        if (num % div.val !== 0)
            return false;

    return true;
}

function isADivisor(num) {
    for (let div of cg.divisors)
        if (num % div.val === 0)
            return true;

    return false;
}

function getDivisorOutput(num) {
    let output = '';
    for (let div of cg.divisors)
        if (num % div.val === 0)
            output += div.text + ' ';
    return output;
}