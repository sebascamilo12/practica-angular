import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './components/videogames/games/games.component';
import { MenuComponent } from './components/menu/menu.component';
import { RickandmortyComponent } from './components/rickandmorty/rickandmorty.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    MenuComponent,
    RickandmortyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
