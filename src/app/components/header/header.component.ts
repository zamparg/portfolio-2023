import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/scroll-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewChecked, OnInit {
  private intersectionObserver!: IntersectionObserver;
  private target!: HTMLElement | null;
  listener = true;

  constructor(public scrollService: ScrollService) {}

  ngAfterViewChecked() {
    const sectionElement = this.scrollService.getSectionElement();
    
    
    // ESTE TRAE EL PROBLEMA
    if (sectionElement && this.target && !this.listener) {
      this.intersectionObserver.unobserve(this.target);
      setTimeout(() => {
        if (this.target) {
          this.scrollService.setVisibility(true);
          this.intersectionObserver.observe(this.target);
        }
      }, 1000);
      //sectionElement.scrollIntoView({ behavior: 'smooth' });
    }


  }

  ngOnInit() {
    this.target = document.querySelector('#header');
    
    if (this.target) {
      this.intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.scrollService.setVisibility(false);
            //const sectionElement = document.getElementById('header');
            //if (sectionElement) this.scrollService.setSectionElement(sectionElement);
            ////console.log(this.scrollService.getVisibility());
          } else {
            this.scrollService.setVisibility(true);       
            ////console.log(this.scrollService.getVisibility());
          }
        },
        { threshold: 0.5 } // Ajusta el umbral según tus necesidades
      );
      this.intersectionObserver.observe(this.target);
    }

// ESTE ES EL ESCUCHADOR DE SI EL LISTENER ESTÄ ACTIVO. 
    this.scrollService.getListener().subscribe((value) => {
      this.listener = value;
      //console.log('Valor de Listener:', value);
    });
  }
}