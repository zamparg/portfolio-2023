import { Component, OnInit } from '@angular/core';
import { BlurService } from './services/blur.service';
import { ScrollService } from './scroll-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'zamparg.';
  blur: boolean = false;
  showBackToTop: boolean = false;
  pageYoffset: number = 0;
  button: boolean = false;

  constructor(public _blur: BlurService, private scrollService: ScrollService) {}

  ngOnInit() {
    this.scrollService.getVisibility().subscribe((value) => {
      this.button = value;
      console.log('Valor de visibilidad:', value);
    });
  }

  goToTop() {
    this.scrollService.setListener(false)
    const sectionElement = document.getElementById('header');
    if (sectionElement) {
      this.scrollService.setSectionElement(sectionElement);
    }
  }
}
