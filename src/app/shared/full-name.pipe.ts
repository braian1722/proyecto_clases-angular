import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log(args);

    const uper:string = value;

    if(args[1] === 'uppercase'){
      return uper.toUpperCase();
    }

    return value;
  }

}
