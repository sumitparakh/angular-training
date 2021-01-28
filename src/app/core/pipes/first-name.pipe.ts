import { Pipe, PipeTransform } from '@angular/core';

type ArgsKey = string | number;

@Pipe({
  name: 'firstName',
})
export class FirstNamePipe implements PipeTransform {
  transform(value: string, ...args: ArgsKey[]): unknown {
    const stringValues = value.split(' ');

    console.log('VALUE: ' + value);
    if (stringValues.length > 0) {
      if (args.length > 0 && typeof args[0] !== 'undefined') {
        return stringValues[+args[0]];
      }
      return stringValues[0];
    }
    return value;
  }
}
