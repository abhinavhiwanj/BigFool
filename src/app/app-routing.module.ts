import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { NameInputComponent } from './name-input/name-input.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

const routes: Routes = [
  { path: 'input', component: InputComponent },
  { path: 'nameinput/:id', component: NameInputComponent },
  { path: 'scoreboard/:id', component: ScoreboardComponent },
  { path: '', redirectTo: '/input', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
