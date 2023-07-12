import { Component,  OnInit } from '@angular/core';
import { BlurService } from './services/blur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'zamparg.';
  blur: boolean = false

  constructor(public _blur:BlurService){
    
  }

  ngOnInit(){
    this._blur.getValue().subscribe((value:boolean) => {
      this.blur = value;
    });

  }

}
