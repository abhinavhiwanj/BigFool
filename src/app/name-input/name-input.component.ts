import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css'],
})
export class NameInputComponent implements OnInit {
  fakeArrayOfPlayer: any;
  noOfPlayer: number;
  players = [];
  noOfPlayerForm = new FormGroup({});
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.noOfPlayer = Number(this.route.snapshot.paramMap.get('id'));
    for (let count = 1; count <= this.noOfPlayer; count++) {
      this.noOfPlayerForm.addControl(`player_${count}`, new FormControl());
    }
    this.fakeArrayOfPlayer = this.createArray();
  }

  createArray() {
    const array = [];
    for (let c = 0; c < this.noOfPlayer; c++) {
      array[c] = c + 1;
    }
    return array;
  }
  onSubmit() {
    for (let c = 0; c < this.noOfPlayer; c++) {
      this.players[c] = this.noOfPlayerForm.get(`player_${c + 1}`).value;
    }
    this.router.navigate([`/scoreboard/${this.players.join(',')}`]);
  }
}
