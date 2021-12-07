import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNo'
})
export class BooleanPipe implements PipeTransform {

  transform(value: boolean): unknown {
    return value ? "YES" : "NO";
  }

}
