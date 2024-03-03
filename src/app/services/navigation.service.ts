import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

    page: BehaviorSubject<any> = new BehaviorSubject<any>(3); //null
    
    constructor(){}

    setData(page:number|null): void {
        this.page.next(page)
      }


 

    //   this.sharedDataService.data.subscribe(data => {
    //     if (!data) return

    //   });


}
