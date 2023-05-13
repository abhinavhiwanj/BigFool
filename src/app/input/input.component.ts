import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      noOfPlayer: new FormControl('',Validators.required)
    })
  }

  onSubmit() {
    if(this.form.valid) {
      this.router.navigate([`/nameinput/${this.form.value.noOfPlayer}`]);
    }
  }
}
