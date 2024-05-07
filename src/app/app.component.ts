import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NameWhiteSpace } from './shared/validators/nameWhiteSpace.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          NameWhiteSpace.noSpaceAllowed,
        ],
      ],
    });
  }
  get m() {
    return this.myForm.controls;
  }
  onSubmit() {
    console.log(this.myForm.value);
  }
}
