import { Component, Input, Output, EventEmitter } from '@angular/core';
import { withComponentInputBinding } from '@angular/router';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent {

  @Input() public coment: string ='';


  ngOnInit(): void {
    console.log(this.coment)
  }

}
