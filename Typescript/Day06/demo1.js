//splice method 
// let a:number[]=[10,52,63,45,78];
// console.log(a);
// a.splice(2,0,100);
// console.log(a);
// a.splice(2,0,88,90,67,102);
// console.log(a);
// a.splice(2,1);
// console.log(a);
// a.splice(1,2);
// console.log(a);
// a.splice(2,1,900);
// console.log(a);
//slice method 
var course = ["C#", 'ADO .net', 'Mysql', 'HTML', 'CSS', 'Typescript', 'Angular', 'AWS', 'Cloud', 'Jenkings'];
var temp = course.slice(0, 6);
// console.log(`
//     Orginal Array => ${course}
//     Copied Array => ${temp}
// `)
var temp1 = course.slice(0);
// console.log(temp1);
// map method 
// to perform element by element operation 
var a = [2, 3, 4, 5, 6];
var opr = a.map(function (value) {
    return (value * value);
});
console.log("\n    Original Array => ".concat(a, "\n    Operational Arr=> ").concat(opr, "\n"));
