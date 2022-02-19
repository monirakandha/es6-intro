// const add = (num1 , num2) => num1 + num2;
const add = (num1 , num2) => num1 + num2;
const sum = add(22,33);
console.log(sum);

const multiply = (num1 , num2 , num3) => num1 * num2 *num3;
const result = multiply(34, 10, 10);
console.log(result);

const fivetimes = (num) => num * 5;
const output = fivetimes(17);
console.log(output);

const tentimes = num => num * 5 ;
const value = tentimes(18);
console.log(value);

const getName = () => 'Brandon Sam';
const name = getName();
console.log(name);

const doMath = (x, y) => {
    const sum = x+y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return result;
}

const total = doMath(12,5);
console.log(total);
    

