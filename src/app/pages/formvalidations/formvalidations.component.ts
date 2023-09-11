import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formvalidations',
  templateUrl: './formvalidations.component.html',
  styleUrls: ['./formvalidations.component.sass']
})
export class FormvalidationsComponent {

  //A form field validator is a function that the form can call
  //in order to decide if a given field is valid or not.
  //A validator function returns true if the form field is valid 
  //according to the validator rules, or false otherwise.
  //A validator can be plugged in directly into a reactive form simply
  //by adding it to the validators list.  Each form field has its 
  //own list of seperate validators.
  formValidations = this.formBuilder.group({
    name: ['', {
      validators: [
        Validators.required
      ]
    }],
    email: ['', {
      validators: [
        Validators.required,
        Validators.email
      ]
    }],
    contact: ['', {
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]
    }],
    password: ['', {
      validators: [
        Validators.required,
        Validators.minLength(8)
      ]
    }]
  })

  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    this.isSubmitted = true;
  }

}
