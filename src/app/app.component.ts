import { Component,  OnInit, Renderer2 } from '@angular/core';
import { BlurService } from './services/blur.service';
import { ScrollService } from './scroll-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'zamparg.';
  blur: boolean = false
  showBackToTop: boolean = false;


  constructor(public _blur:BlurService,private scrollService:ScrollService, private renderer: Renderer2){
    
  }

  ngOnInit(){
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.75}

      const observer = new IntersectionObserver(
        ([entry]) => {
          this.showBackToTop = entry.isIntersecting;
        },
        options );

        const target = document.querySelector('.btn-back');
        if (target instanceof Element) { // Verifica si target es una instancia de Element
          observer.observe(target);}
  }


  goToTop() {
    const sectionElement = document.getElementById('header');
    if (sectionElement) {
      this.scrollService.setSectionElement(sectionElement);
    }
  }
}


