import { AfterViewChecked, Component } from '@angular/core';
import { ScrollService } from 'src/app/scroll-service.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css'],
})
export class DescripcionComponent implements AfterViewChecked{
  constructor(private scrollService: ScrollService) {}

  ngOnInit() {}
  
  ngAfterViewChecked() {
    
    // const sectionElement = this.scrollService.getSectionElement();
    // if (sectionElement) {
    //   sectionElement.scrollIntoView({ behavior: 'smooth' });
    // }
  }
storeSectionElement() {
    const sectionElement = document.getElementById('contact');
    sectionElement?.scrollIntoView({ behavior: 'smooth' });
  }

  
}
