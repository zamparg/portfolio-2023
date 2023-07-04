import { Component } from '@angular/core';

@Component({
  selector: 'app-quiensoy',
  templateUrl: './quiensoy.component.html',
  styleUrls: ['./quiensoy.component.css']
})
export class QuiensoyComponent {
  skill:string = 'front'

  changeSkill(skill:string){
    this.skill=skill
  }

}
