import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'shortDescription'
})
export class ShortDescription implements PipeTransform{
    transform(txt: string, size: number): string{
        if(txt.length > size){
            return txt.substr(0,size) + '...';
        }

        return txt;
    }
}