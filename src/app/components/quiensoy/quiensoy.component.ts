import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-quiensoy',
  templateUrl: './quiensoy.component.html',
  styleUrls: ['./quiensoy.component.css']
})
export class QuiensoyComponent implements OnInit{
  skill:string = 'front'
  data:any

  constructor(private _data:DataService){}
  
  ngOnInit(){
    this._data.getData().subscribe(
      res =>{
        this.data=res.skills
      }
    )
  }

  changeSkill(skill:string){
    this.skill=skill
  }

}
