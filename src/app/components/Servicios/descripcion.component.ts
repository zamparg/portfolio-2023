import { AfterViewChecked, Component } from '@angular/core';
import { ScrollService } from 'src/app/scroll-service.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css'],
})
export class DescripcionComponent implements AfterViewChecked{
  constructor(private _nav: NavigationService) {}

  ngOnInit() {}
  
  ngAfterViewChecked() {
    
    // const sectionElement = this.scrollService.getSectionElement();
    // if (sectionElement) {
    //   sectionElement.scrollIntoView({ behavior: 'smooth' });
    // }
  }
  goTo(id: number | null) {
    this._nav.setData(id);
  }
  
}
