
export class CourseService{
    private course:string[]=["Core Java",'dot Net','Node js','Entity Freamwork 4.0','Express Js','Django Freamwork','Angular','Docker'];

    getCourse(){
        return (this.course);
    }

}