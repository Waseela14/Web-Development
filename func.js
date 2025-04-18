function fun(){
    console.log("learning JS");
}
fun();

//with parameter
function prin(msg){
    console.log(msg);
}
prin('im going to become web developer');

// average
const avg = (a, b, c, d) => {
    return (a + b + c + d) / 4;
};
console.log(avg(3, 4, 5, 6)); 




// condition inside function
function isEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(isEven(4)); 
console.log(isEven(7)); 

//recursive function
function sumToN(n) {
    if (n === 1) return 1;
    return n + sumToN(n - 1);
}
console.log(sumToN(5)); 

//ARROW FUNCTIONS
const arr = () =>{
    console.log('hello');
}
arr(); 

// multiplication
const mul = (a,b) => {
    return a*b;
};
console.log(mul(2,3));




let array = [1,2,3,4];
 array.forEach((n) => {
    console.log(n*n);
 });

 let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let even = A.filter((v) => {
     return v % 2 === 0;
 });
 console.log(even); 
 

// check number
let numb = [-5, 0, 12, -8, 7];
numb.forEach((num) => {
    if (num > 0) {
        console.log(num + " is Positive");
    } else if (num < 0) {
        console.log(num + " is Negative");
    } else {
        console.log(num + " is Zero");
    }
});


/// find max no
let numbers = [10, 25, 3, 8, 30, 12];
numbers.forEach((max) =>{
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return console.log("The largest number is: " + max);
});























// const mean = (a,b,c,d) =>{
//  return (a+b+c+d)/4 ;
// }
// console.log(mean(2,4,6,8));