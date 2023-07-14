import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/scroll-service.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-quiensoy',
  templateUrl: './quiensoy.component.html',
  styleUrls: ['./quiensoy.component.css']
})
export class QuiensoyComponent implements OnInit, AfterViewChecked{
  skill:string = 'front'
  data:any

  constructor(private _data:DataService, public scrollService:ScrollService){}
  
  
  ngAfterViewChecked() {
    
    const sectionElement = this.scrollService.getSectionElement();
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

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
