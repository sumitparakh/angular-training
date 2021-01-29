import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-handling',
  templateUrl: './form-handling.component.html',
  styleUrls: ['./form-handling.component.scss'],
})
export class FormHandlingComponent implements OnInit {
  profile = {
    firstName: 'Sumit',
    lastName: 'Parakh',
    contact: '1234567',
  };

  profileForm = new FormGroup({
    firstName: new FormControl('Sumit', Validators.required),
    lastName: new FormControl('', Validators.required),
    contact: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log({ profile: this.profile });
  }
  onSubmit2() {
    console.log({
      FormSubmit: this.profileForm.value,
      errors: this.profileForm.controls,
    });
  }
}
