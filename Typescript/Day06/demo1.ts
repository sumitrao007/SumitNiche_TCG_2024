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
let course:string[]=["C#",'ADO .net','Mysql','HTML','CSS','Typescript','Angular','AWS','Cloud','Jenkings'];

let temp=course.slice(0,6)
// console.log(`
//     Orginal Array => ${course}
//     Copied Array => ${temp}
// `)
let temp1=course.slice(0);
// console.log(temp1);

// map method 
// to perform element by element operation 

let a:number[]=[2,3,4,5,6];

let opr= a.map((value)=>{
    return (value*value)
});
console.log(`
    Original Array => ${a}
    Operational Arr=> ${opr}
`);



