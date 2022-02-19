// function decalre 
function add (num1 , num2){
    // const sum = num1 + num2;
    return num1 + num2;
}
// document.getElementById('my-btn').onclick = function handleEvent(){

// }
const sum = add(15, 17);
console.log(sum)

//function expression
const add2 = function add2(num1 , num2){
    return num1 + num2 ;
}
const sum1 = add(15, 89);
const sum2 = add (45 , 56);
console.log(sum1, sum2);

//function expresssion 
const add3 = function(num1 , num2){
    return num1 + num2;
}
const sum3 = add3(34, 34);
console.log(sum3);

// arrow function 
const add4 = (num1 , num2) => num1 + num2;
const sum4 = add4(25, 25);
console.log(sum4);