import { Component } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent {

  public comentario: string = '';


  ngOnInit(): void{
    this.comentario ='';
  }
  public keyUp(value: string) : void {
    this.comentario = value;
  }
}
