import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../interfaces/note';

@Pipe({
  name: 'filter',
  pure:true
})
export class FilterPipe implements PipeTransform {

  transform(value: Note[], search: string, tag:string): any {
    let result:Note[] = value;
    if(tag && tag !== ''){
      result = value.filter( note => note.body.indexOf(tag) > -1);
    }
    if(search){
      if(value && value.length > 0){
        result = result.filter( note => note.title.toLowerCase().indexOf(search.toLowerCase().trim()) > -1 ? note : false );
      }
    }
    return result;
  }

}
