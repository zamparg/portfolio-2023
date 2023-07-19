import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScrollService } from 'src/app/scroll-service.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-quiensoy',
  templateUrl: './quiensoy.component.html',
  styleUrls: ['./quiensoy.component.css']
})
export class QuiensoyComponent implements OnInit, AfterViewInit {
  skill: string = 'front';
  data: any;


  constructor(private _data: DataService, public scrollService:ScrollService) {}

  ngOnInit() {
    this._data.getData().subscribe((res) => {
      this.data = res.skills;
    });
  }

  ngAfterViewInit() {
    // const sectionElement = this.scrollService.getSectionElement();
    // if (sectionElement) {
    // //  sectionElement.scrollIntoView({ behavior: 'smooth' });
    // }
  }

  changeSkill(skill: string, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.skill = skill;
  }
}