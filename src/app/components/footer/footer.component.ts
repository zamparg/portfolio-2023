import { Component, AfterViewChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ScrollService } from 'src/app/scroll-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewChecked{

  contactForm:FormGroup 

  constructor(private _fb:FormBuilder, private scrollService: ScrollService){
    this.contactForm= this._fb.group(
      {
      nombre:[''],
      email:[''],
      asunto:[''],
      comentario:['']
    })
    }


  onSend(){}

  ngOnInit() {}

  ngAfterViewChecked() {
    
    const sectionElement = this.scrollService.getSectionElement();
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  }