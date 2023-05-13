import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  playersName$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() { }
}
