import { Component, AfterViewChecked } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollService } from 'src/app/scroll-service.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BlurService } from 'src/app/services/blur.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewChecked{

  contactForm:FormGroup 
  sending:boolean=false
  received:boolean=false
  error:boolean=false

  constructor(private _fb:FormBuilder, private scrollService: ScrollService, public _blur:BlurService){
    this.contactForm= this._fb.group(
      {
      nombre:['', Validators.required],
      email:['', Validators.required],
      asunto:['', Validators.required],
      comentario:['', Validators.required]
    })
    }


  onSend($event:any){
    this.handleSubmit($event)

  }

  ngOnInit() {}

  ngAfterViewChecked() {
    
    const sectionElement = this.scrollService.getSectionElement();
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }



async handleSubmit($event:any) {
    $event.preventDefault();
    //this._blur.setValue(true)
    this.sending=true
    var data = new FormData($event.target);
    fetch($event.target.action, {
      method: 'POST',
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        this.received=true
        this.contactForm.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
           this.error=true
          } else {
            this.error=true
          }
        })
      }
    }).catch(error => {
      this.error=true
    });
  }
  
  close(){
    this.sending=false
    this.received=false
    this.error=false
    //this._blur.setValue(false)
  }
  }