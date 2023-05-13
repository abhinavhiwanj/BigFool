import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css'],
})
export class NameInputComponent implements OnInit {
  @ViewChildren('playerName') playerNames: QueryList<ElementRef>;

  Arr = Array;
  noOfPlayer: number = 0;
  players = [];

  constructor(private route: ActivatedRoute, private router: Router, private playersService: PlayersService) {}

  ngOnInit(): void {
    this.noOfPlayer = Number(this.route.snapshot.params.numOfPlayer);
  }

  onSubmit() {
    let invalid = false;
    this.playerNames.forEach(item =>{
      const value = item.nativeElement.value;
      if(value) {
        this.players.push(value)
      } else {
        invalid = true;
      }
    });
    if(invalid) {
      alert("Please enter all the player names");
    } else {
      this.playersService.playersName$.next(this.players);
      this.router.navigate(['/scoreboard']);
    }
  }
}
