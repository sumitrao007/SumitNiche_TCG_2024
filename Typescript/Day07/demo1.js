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
var a = 10;
var b = 20;
a = a ^ b;
console.log("\n    a : ".concat(a, "\n    b : ").concat(b, "\n"));
b = a ^ b;
console.log("\n    a : ".concat(a, "\n    b : ").concat(b, "\n"));
a = a ^ b;
console.log("\n--------------After Swap--------\n    a : ".concat(a, "\n    b : ").concat(b, "\n"));
