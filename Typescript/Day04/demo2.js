//anonymous function
// function does not have any name 
// that function execute there itself in internal angular freamwork 
// without parameter & without return type 
var temp1 = function () {
    console.log("anonymous function is called ");
};
// temp1();
// with parameter & with return type 
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(10, 20);
// console.log('Result :: '+res);
//fat arrow function/Arrow function
// it is advanced version of annonymous function
var temp3 = function () {
    console.log("First type of Fat arrow function is called ");
};
//    temp3();
var temp4 = function (a, b) {
    return (a + b);
};
//    console.log(`
//         Addition :: ${temp4(5,3)}
//    `)
// optional parameter function
function add1(a, b) {
    console.log("Value of a is " + a); // 10
    console.log("Value of b is " + b); // undefined
    console.log("addition of a+b is " + (a + b)); // NAN
}
//    add1(10);
// add1(10,50);
function add2(a, b) {
    console.log("Value of a is " + a); // 10
    console.log("Value of b is " + b); // undefined
    console.log("addition of a+b is " + (a + b)); // NAN
}
// add2();
// default parameter function
function add3(a, b) {
    if (b === void 0) { b = 20; }
    console.log("Value of a is " + a); // 4
    console.log("Value of b is " + b); // 80
    console.log("addition of a+b is " + (a + b)); // 24
}
add3(4, 80);
