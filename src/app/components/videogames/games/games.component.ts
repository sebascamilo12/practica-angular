import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  status: string = 'Form not submitted';
  defaultName: string = '';
  nameGame: string = '';
  user: string = '';
  displaygame: boolean = false;
  names: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  onSendForm() {
    this.names.push(this.nameGame);
    alert('Se agrego con exito')
    this.status = 'Form has been send';
  }

  ondefaultForm() {
    this.defaultName = 'Fornite';
  }
}
