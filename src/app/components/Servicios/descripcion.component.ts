import { Component } from '@angular/core';
import { ScrollService } from 'src/app/scroll-service.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css'],
})
export class DescripcionComponent {
  constructor(private scrollService: ScrollService) {}

  ngOnInit() {}

  storeSectionElement() {
    const sectionElement = document.getElementById('contact');
    if (sectionElement) {
      this.scrollService.setSectionElement(sectionElement);
    }
  }

  
}
