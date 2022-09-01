import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { RickandmortyComponent } from './components/rickandmorty/rickandmorty.component';
import { GamesComponent } from './components/videogames/games/games.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: 'games',
    component: GamesComponent,
  },
  {
    path: 'rickandmorty',
    component: RickandmortyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
