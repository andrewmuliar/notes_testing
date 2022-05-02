import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../interfaces/note';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(value: Note[]): any {
    if(value){
      value.sort( (a, b) => {
        return +b.created - +a.created;
      });
      return value;
    }
    return null;
  }

}
