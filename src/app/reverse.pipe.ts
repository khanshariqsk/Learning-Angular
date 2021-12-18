import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let length:number = value.length - 1
    let reversedString:string = ''
    for(let i=length ; i>-1 ; i--){
      reversedString+=value.charAt(i)
    }
    return reversedString;
  }

}
