//array
// array is growable & shrinkable dynamically
// u can store homogenous data as well as heterogenous data 
// let a:number[]=[10,20,30,40];
var a1 = [];
var a2 = [2.5, 4, 3.5, 6];
var a3 = [2.5, 'Sumit', 50];
var a4 = [5, 'Sumit', 9];
a4[5] = true;
// for(let i=0;i<a.length;i++){
//     console.log("value of a[i] is "+a[i])
// }
// console.log(a);
// console.log(a.join(' # '));
// a2.forEach((myvalue,i,arr)=>{
//     console.log("Value is "+myvalue+" Index is "+i+" "+arr)
// });
// Rest parameter Function
function display() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log(item.join(' '));
}
// display(10,20,30,40,50);
// display(10);
// Push & pop method
// it works on LIFO Principal
var a = [];
a.push(78);
console.log(a);
a.push(45, 85, 96, 32, 10, 27);
console.log(a);
var res = a.pop();
console.log(a);
console.log("poped value " + res);
console.log("\n    Poped value is ".concat(a.pop(), "\n    Array is :: ").concat(a, "\n"));
