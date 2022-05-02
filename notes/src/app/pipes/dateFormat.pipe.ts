import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  pure:true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string): any {
    if(value){
      console.log(value);
      const date = new Date( +value);
      console.log(date);
      const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      const month = date.getMonth() +1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
      return `${day}.${month}.${date.getFullYear()}`;
    }
    return null;
  }

}
