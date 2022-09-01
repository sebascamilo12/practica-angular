import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickandmortyComponent implements OnInit {

  constructor(private _rickmorty : RickMortyService) { }

  ngOnInit(): void {
  }

  getApi(){
    this._rickmorty.getApi().subscribe({
      next: (v) => {console.log(v);
      },
      error:(e) => {console.log(e);
      }
    });
  }

}
