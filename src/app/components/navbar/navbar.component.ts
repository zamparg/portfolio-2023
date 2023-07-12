import { AfterViewChecked, Component } from '@angular/core';
import { ScrollService } from 'src/app/scroll-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host:{
    class:"container-fluid d-flex align-items-center"
  }
})
export class NavbarComponent{
  active:boolean=false

  constructor( private scrollService:ScrollService){}

  onActive(){
    this.active=!this.active
  }



  goTo(id:string) {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      this.scrollService.setSectionElement(sectionElement);
    }
  }

}
