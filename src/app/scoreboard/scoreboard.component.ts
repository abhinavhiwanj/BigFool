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
  totalGame = [];

  constructor(private route: ActivatedRoute, private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.playersName$.subscribe(players => {
      // players = ['Abhinav','Ritika', "Sangita"];
      this.players = players.map(p => ({name:p, score:0}))
      const game = {index:1, playerScore:{}};
      this.players.forEach(player => {
        game.playerScore[player.name] = '';
      })
      this.totalGame = [game];
    });
  }

  onChange() {
    this.players.forEach(player => {
      player.score = 0;
    this.totalGame.forEach(game => {
        player.score += Number(game.playerScore[player.name]);
      });
    });
  }

  onAddRow() {
    const newGame = {index:this.totalGame.length + 1, playerScore:{}};
      this.players.forEach(player => {
        newGame.playerScore[player.name] = '';
      })
    this.totalGame.push(newGame);
  }
}
