import { AfterViewChecked, Component } from '@angular/core';
import { ScrollService } from 'src/app/scroll-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewChecked{

  constructor(public scrollService:ScrollService){}
  
  ngAfterViewChecked() {
    
    const sectionElement = this.scrollService.getSectionElement();
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
