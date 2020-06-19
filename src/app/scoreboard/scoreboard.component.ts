import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit {
  players = [];
  scoreFormGroup = new FormGroup({});
  totalGame = 10;
  fakeTotalGame = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const playerCount = this.route.snapshot.paramMap.get('id').split(',');
    for (const [index, name] of playerCount.entries()) {
      const controllerName = `${name}`;
      for (let i = 0; i < this.totalGame; i++) {
        this.scoreFormGroup.addControl(controllerName + i, new FormControl());
      }
      this.scoreFormGroup.addControl(`${controllerName}_Total`, new FormControl());
      this.players[index] = { name, controllerName };
    }
    this.fakeTotalGame = this.createArray();
    console.log(this.players);
  }

  createArray() {
    const array = [];
    for (let c = 0; c < this.totalGame; c++) {
      array[c] = c;
    }
    return array;
  }

  onSubmit() {
    for (const player of this.players) {
      let total = 0;
      for (let i = 0; i < this.totalGame; i++) {
        total += this.scoreFormGroup.get(`${player.name}${i}`).value;
      }
      this.scoreFormGroup.get(`${player.name}_Total`).setValue(total);
    }
  }
}
