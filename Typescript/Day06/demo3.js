// what is meanining of shallow copy & deep copy 
var a = 10;
var b = a;
// console.log(`
//     a :: ${a}
//     b :: ${b}
// `);
b = 30;
// console.log(`
//     a :: ${a}
//     b :: ${b}
// `);
var arr = [4, 5, 6, 7];
var arr1 = arr;
// console.log(`
//     arr :: ${arr}
//     arr1 :: ${arr1}
// `);
arr1[1] = 200;
// console.log(`
//     arr :: ${arr}
//     arr1 :: ${arr1}
// `);
var arr2 = [45, 63, 20, 7];
var arr3 = arr2.slice(0);
console.log("\n    arr2 :: ".concat(arr2, "\n     arr3 :: ").concat(arr3, "\n"));
arr3[1] = 800;
console.log("\n    arr2 :: ".concat(arr2, "\n     arr3 :: ").concat(arr3, "\n"));
