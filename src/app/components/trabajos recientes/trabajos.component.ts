import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { ScrollService } from 'src/app/scroll-service.service';


@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css'],
  animations: [
    trigger('onOff', [
      transition(':enter', [style({
        opacity: 0,
        transform: 'translatey(-25%)'
      }),
      animate(400)
    ]),
    transition(':leave', [style({
      opacity: 1,
      
    }),
    animate(400, style({ opacity: 0 , transform: 'translatey(-25%)'}))
  ])
    ]),
    trigger('button', [
      transition(':enter', [style({
        opacity: 0,
        //transform: 'translatey(-25%)'
      }),
      animate("400ms 0.5s")
    ]),
    transition(':leave', [style({
      opacity: 1,

    }),
    animate(400, style({ opacity: 0 }))
  ])
    ])
 ]
})
export class TrabajosComponent implements OnInit, AfterViewChecked{
  data:any
  view:boolean =false
  dataLength!:number

  constructor(private _data:DataService, private scrollService:ScrollService){}
  ngAfterViewChecked() {
    
    // const sectionElement = this.scrollService.getSectionElement();
    // if (sectionElement) {
    //   sectionElement.scrollIntoView({ behavior: 'smooth' });
    // }
  }
  ngOnInit(){
    this._data.getData().subscribe(
      res =>{
        this.data=res.recentWorks
        this.dataLength=this.data.length
      }
    )
  }

  
  getFrontendWorkArray(): any[] {
    if (this.data) {
      return Object.values(this.data);
    }
    return [];
  }

  viewMore(){
    this.view=!this.view
  }
  viewLess(){
    this.view=!this.view
    setTimeout(()=>{
      this.scroll()
    }, 200)
    
  }

  scroll() {
    const el = document.getElementById('trabajos')
    el?.scrollIntoView({behavior: 'smooth'});
  }
}
