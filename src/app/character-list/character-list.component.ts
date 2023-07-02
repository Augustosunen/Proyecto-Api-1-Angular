import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  title: string

  constructor() {
    this.title = 'Listado de Personajes'
    console.log('listado finalizado')
  }

  ngOnInit(){
    console.log (this.title);
    console.log('ngOnInit finalizado')
  }

}
