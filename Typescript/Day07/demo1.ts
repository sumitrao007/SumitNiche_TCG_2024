// swap the 2 values without using 3rd variable 
// 1 addition & substraction
// 2 multiplication & division
// 3 xoring ^
// 4 destructor of array

// let a=10;
// let b=20;

// [a,b]=[b,a];
// console.log(`
//     a : ${a}
//     b : ${b}
// `)

let a=10;
let b=20;

a=a^b;
console.log(`
    a : ${a}
    b : ${b}
`);
b=a^b;
console.log(`
    a : ${a}
    b : ${b}
`)
a=a^b;

console.log(`
--------------After Swap--------
    a : ${a}
    b : ${b}
`);