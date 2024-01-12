
// return multiple value from the function

function operation(a:number,b:number){
    return ([a+b,a-b,a*b])
}

let [add,sub,mul]=operation(10,2);

console.log(`
    add :: ${add}
    Sub :: ${sub}
    mul :: ${mul}
`);