import { Component, OnInit } from '@angular/core';
import { BlurService } from './services/blur.service';
import { ScrollService } from './scroll-service.service';
import { NavigationService } from './services/navigation.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'scale(1.5)', opacity:0}),
        animate('500ms ease-in', style({transform: 'scale(1)', opacity:1}))
      ]),
      // transition(':leave', [
      //   animate('500ms ease-in', style({transform: 'translateY(-100%)'}))
      // ])
    ])
  ]
  
})
export class AppComponent implements OnInit {
  title = 'zamparg.';
  blur: boolean = false;
  showBackToTop: boolean = false;
  pageYoffset: number = 0;
  button: boolean = false;
  page:number|null = null

 constructor(public _blur: BlurService, private _nav: NavigationService) {}

  ngOnInit() {
    this._nav.page.subscribe((data) => {
      this.page=data 
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    });
  }

  goToTop() {
    
  }
}
