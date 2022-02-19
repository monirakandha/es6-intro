const number = [23, 45, 57, 89 , 484];
console.log(number);
console.log(...number);

const max =Math.max(23, 57, 89, 47);
console.log(max);

const maxInArray = Math.max(...number);
console.log(max, maxInArray);

number.push(55);
console.log(number);

// const number2 = number;
// number.push(345);
// console.log(number2);


const number2 = [22, 34, 56,...number,88 , 89 , 890, 90, 9876];
number2.push(350);
console.log(number2);


