import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css'
})
export class SelectorComponent {
 prb: any="dfhrh";
 
  constructor(){
     console.log(this.prb)
  }

 

}


