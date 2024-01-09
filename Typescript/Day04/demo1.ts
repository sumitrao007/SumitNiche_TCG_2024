//Functions

// 1 functions without parameter & without return type 
// 2 functions with parameter & without return type
// 3 functions without parameter & with return type
// 4 functions with parameter & with return type

// 1 functions without parameter & without return type 
function add1(){
    console.log("1st type Function is Called ")
}

// add1();

// 2 functions with parameter & without return type

function add2(a:number,b:number){
    console.log("Addition is "+(a+b));
}

// add2(10,5);

// 3 functions without parameter & with return type

function add3(){
    return (8+8+"Sumit");
}

//  let res= add3();
//  console.log("Result :: "+res)

// 4 functions with parameter & with return type

function add4(a:number,b:number):number{
    return (a+b);
}

// console.log(`
//     Result is :: ${add4(10,9)}
// `)
