import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { invalidName } from '../core/validators/invalid-name.validator';
import { validateNameFirstLetter } from '../core/validators/name-first-letter.validator';

@Component({
  selector: 'app-advance-forms',
  templateUrl: './advance-forms.component.html',
  styleUrls: ['./advance-forms.component.scss'],
})
export class AdvanceFormsComponent implements OnInit {
  employeeForms = new FormArray([
    new FormGroup({
      firstName: new FormControl('', [
        validateNameFirstLetter,
        invalidName(/[0-9]+/gm)
      ]),
      lastName: new FormControl('', [
        validateNameFirstLetter,
        invalidName(/[0-9]+/gm)
      ]),
      contact: new FormControl(),
    }),
  ]);

  get formGroups(): FormGroup[] {
    return this.employeeForms.controls as FormGroup[];
  }

  constructor() {}

  ngOnInit(): void {}

  addEmployeeForm(): void {
    this.employeeForms.controls.push(
      new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        contact: new FormControl(),
      })
    );
  }

  saveEmployees(): void {
    console.log({ formValues: this.employeeForms.value });
  }
}
