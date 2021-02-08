import { AbstractControl, ValidatorFn } from '@angular/forms';

export function invalidName(regex: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isInvalid = regex.test(control.value);
    console.log({isInvalid});
    return isInvalid ? { invalidName: true } : null;
  };
}
