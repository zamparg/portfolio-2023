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
  init:boolean=true

  constructor( private scrollService:ScrollService){}

  onActive(){
    this.active=!this.active
    this.init=false
  }



  goTo(id:string) { 
    
    console.log('SE SUPONE QUE DETUVE LA EJECUCIÓN')
    this.scrollService.setListener(false)
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      this.scrollService.setSectionElement(sectionElement);
    }
  }


}
