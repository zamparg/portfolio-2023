import { AfterViewInit, Component } from '@angular/core';
import { ScrollService } from 'src/app/scroll-service.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SideBarComponent implements AfterViewInit {
  active: boolean = false;
  init: boolean = true;
  page:number|null = null

  constructor(private _nav: NavigationService) {}

  ngAfterViewInit() {
    this.onActive();

    this._nav.page.subscribe((data) => {
      this.page=data  
    });
  }

  onActive() {
    this.active = !this.active;
    this.init = false;
  }

  goTo(id: number | null) {
    this._nav.setData(id);
  }
}
