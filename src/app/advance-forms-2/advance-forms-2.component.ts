import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
  HostBinding,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { invalidName } from '../core/validators/invalid-name.validator';
import { validateNameFirstLetter } from '../core/validators/name-first-letter.validator';

/**
 * 1) Multiple Forms => Array of form groups => FormArray
 * 3 forms => 3 employee records => 1 FormArray with 3 FormGroups
 * 2) Multiple Form Controls => Array for Form controls => FormGroup
 * 3) Single Form Control => FormControl
 */
@Component({
  selector: 'app-new-advance-forms',
  templateUrl: './advance-forms-2.component.html',
  styleUrls: ['./advance-forms-2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvanceForms2Component implements OnInit {
  // FormGroup, FormControl

  @HostBinding('id')
  id = 'hostid';

  @HostBinding('class.invalid')
  get isFormInvalid(): boolean {
    return this.employeeForms.invalid;
  }

  classStyle = 'host-class';

  errors: any = {
    firstLetterCapital: 'First letter should be capital',
    invalidName: 'Invalid first name',
  };

  employeeForms = new FormArray([]);

  get employeeGroups(): FormGroup[] {
    return this.employeeForms.controls as FormGroup[];
  }

  constructor() {}

  firstNameControl(formGroup: FormGroup): AbstractControl {
    return formGroup.get('firstName') as AbstractControl;
  }

  ngOnInit(): void {
    console.log('formArrayControls', this.employeeForms.controls);
  }

  addEmployeeForm(): void {
    this.employeeForms.push(
      new FormGroup({
        firstName: new FormControl('', [
          invalidName(/[0-9]+/gm),
          validateNameFirstLetter,
        ]),
        lastName: new FormControl('', [
          validateNameFirstLetter,
          invalidName(/[0-9]+/gm),
        ]),
        contact: new FormControl(),
      })
    );

    console.log('formArrayControls', this.employeeForms.controls);
  }
}
