// what is meanining of shallow copy & deep copy 

let a=10;

let b=a;

// console.log(`
//     a :: ${a}
//     b :: ${b}
// `);

b=30;

// console.log(`
//     a :: ${a}
//     b :: ${b}
// `);


let arr=[4,5,6,7];
let arr1=arr;

// console.log(`
//     arr :: ${arr}
//     arr1 :: ${arr1}
// `);

arr1[1]=200;
// console.log(`
//     arr :: ${arr}
//     arr1 :: ${arr1}
// `);


let arr2=[45,63,20,7];

let [...arr3]=arr2;
console.log(`
    arr2 :: ${arr2}
     arr3 :: ${arr3}
`);

arr3[1]=800;
console.log(`
    arr2 :: ${arr2}
     arr3 :: ${arr3}
`);