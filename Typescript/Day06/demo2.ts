//array destructor

let a:number[]=[10,20,30,40];

let [t1,t2,t3,t4]=a;

// console.log(`
//         t1 :: ${t1}
//         t2 :: ${t2}
//         t3 :: ${t3}
//         t4 :: ${t4}
// `);

let [s1,...arr]=a;

console.log(`
        s1 :: ${s1}
        arr:: ${arr}
`);
