import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "searchFilter"
})

export class SearchFilterPipe implements PipeTransform {
    transform(data:any, args?: any): any {

        args = args.toLowerCase();

        return data.filter(function(individual: any) {
            return JSON.stringify(individual.product).toLowerCase().includes(args);
        })
    }
}