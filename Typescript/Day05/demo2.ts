//array
// array is growable & shrinkable dynamically
// u can store homogenous data as well as heterogenous data 

// let a:number[]=[10,20,30,40];
let a1:any[]=[];
let a2=[2.5,4,3.5,6];
let a3=[2.5,'Sumit',50];
let a4:any[]=[5,'Sumit',9];
a4[5]=true;

// for(let i=0;i<a.length;i++){
//     console.log("value of a[i] is "+a[i])
// }

// console.log(a);
// console.log(a.join(' # '));

// a2.forEach((myvalue,i,arr)=>{
//     console.log("Value is "+myvalue+" Index is "+i+" "+arr)
// });

// Rest parameter Function

function display(...item:number[]){
    console.log(item.join(' '));   
}

// display(10,20,30,40,50);
// display(10);

// Push & pop method
// it works on LIFO Principal

let a:number[]=[];
a.push(78);
console.log(a);
a.push(45,85,96,32,10,27);
console.log(a);

let res=a.pop();
console.log(a);
console.log("poped value "+res);


console.log(`
    Poped value is ${a.pop()}
    Array is :: ${a}
`);


