import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  noOfPlayer: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.router.navigate([`/nameinput/${this.noOfPlayer}`]);
  }
}
