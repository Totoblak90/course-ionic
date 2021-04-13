import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  formulario: FormGroup = this.fb.group({
    text: ['', [Validators.required]],
    number: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    url: ['', [Validators.required]],
    date: [Validators.required],
    tel: ['', [Validators.required]]
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
  }

  onClick() {

    if (this.formulario.valid) {

      console.log(this.formulario.value)
    } else {
      console.log('Please complete all the fields');
      
    }
  }

}
