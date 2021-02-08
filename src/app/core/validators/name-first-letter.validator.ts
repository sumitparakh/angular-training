import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 *
 * @param control: AbstractControl
 *
 * AbstractControl is the base class of FormControl
 */
export function validateNameFirstLetter(
  control: AbstractControl
): ValidationErrors | null {
  const { value } = control;
  if (!value || value.length === 0) {
    return null; // no error
  }

  if (value[0] >= 'A' && value[0] <= 'Z') {
    return null; // no error
  }

  // validation error
  return { firstLetterCapital: true };
}
