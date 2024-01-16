
export class Department{

    private role:string;

    constructor(r:string){
        this.role=r;
    }

    // Setter & getter Method 

    getRole(){
        return this.role;
    }

    setRole(role:string){
        this.role=role;
    }


}