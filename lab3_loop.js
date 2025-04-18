//prnt num 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//sum of numbers
/*let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum:", sum); */

// table of 5 
/*let num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
} */


    // sum of array
    let numbers = [10, 20, 30, 40, 50];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log("Sum of array elements:", sum);

    // count vowels
let str = "JavaScript is awesome!";
let count = 0;
for (let i = 0; i < str.length; i++) {
    if ("aeiouAEIOU".includes(str[i])) {
        count++;
    }
}
console.log("Number of vowels:", count);

//star pattern
let n = 5; // Number of rows
for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
}


    

