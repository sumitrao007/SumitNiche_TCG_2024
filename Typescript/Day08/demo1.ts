
export class Myclass{

   public id:number;
   private fname:string;
   protected lname:string;

    // constructor(){
    //     console.log("u r in parameter less constructor")
    // }

    constructor(id: number,f:string,l:string){
        this.id=id;
        this.fname=f;
        this.lname=l;
    }

    

     display(){
        console.log(`
            Id          :: ${this.id}
            First Name  :: ${this.fname}
            Last name   :: ${this.lname}
        `)
    }


}


export function add(a:number,b:number){
    return (a+b);
}

export const pi=3.14;



// let obj=new Myclass(9,'Sumit','Raokhande');
// obj.display();