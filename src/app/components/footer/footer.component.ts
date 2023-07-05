import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  contactForm:FormGroup 

  constructor(private _fb:FormBuilder){
    this.contactForm= this._fb.group(
      {
      nombre:[''],
      email:[''],
      asunto:[''],
      comentario:['']
    })
    }


    onSend(){}
  }