import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'summary',
    pure:false
})
export class SummaryPipe implements PipeTransform
{
    transform(value: any,start:number=0,end:number=20) {
        console.log("transform method is called ...");

        let temp=(<string> value);
        // let s=start?start:0;
        // let e=end?end:20;
        // return (temp.substring(0,20)+"...")
        // return (temp.substring(s,e)+"...");
        return (temp.substring(start,end)+"...");

    }




}