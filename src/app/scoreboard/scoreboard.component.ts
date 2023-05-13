import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit {
  @ViewChildren("gameValue") gameValues: QueryList<ElementRef>;

  players = [];
  totalGame = 1;

  constructor(private route: ActivatedRoute, private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.playersName$.subscribe(players => {
      this.players = ['Abhinav','Ritika', "Sangita"];
    });
  }

  onChange(event) {
    console.log(event);
  }

  onAddRow() {
    this.totalGame++;
  }
}
