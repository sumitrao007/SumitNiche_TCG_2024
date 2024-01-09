//anonymous function
// function does not have any name 
// that function execute there itself in internal angular freamwork 

// without parameter & without return type 

let temp1= function (){
    console.log("anonymous function is called ")
}

// temp1();

// with parameter & with return type 

let temp2= function (a:number,b:number):number{
    return (a+b);
}

let res= temp2(10,20);
// console.log('Result :: '+res);

//fat arrow function/Arrow function
// it is advanced version of annonymous function

 let temp3=()=>{
    console.log("First type of Fat arrow function is called ");
   }

//    temp3();

 let temp4= (a:number,b:number):number=>{
    return (a+b);
   }

//    console.log(`
//         Addition :: ${temp4(5,3)}
//    `)


// optional parameter function

   function add1(a:number,b?:number){
        console.log("Value of a is "+a);// 10
        console.log("Value of b is "+b); // undefined
        console.log("addition of a+b is "+(a+b!));// NAN
   }

//    add1(10);
// add1(10,50);

function add2(a?:number,b?:number){
    console.log("Value of a is "+a);// 10
    console.log("Value of b is "+b); // undefined
    console.log("addition of a+b is "+(a!+b!));// NAN
}

// add2();

// default parameter function

function add3(a:number,b:number=20){
    console.log("Value of a is "+a);// 4
    console.log("Value of b is "+b); // 80
    console.log("addition of a+b is "+(a+b));// 24
}

// add3(4,80);

function add4(a?:number,b:number=20){
    console.log("Value of a is "+a);// 4
    console.log("Value of b is "+b); // 80
    console.log("addition of a+b is "+(a!+b));// 24
}


// add4();
