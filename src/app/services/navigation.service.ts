import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

    page: BehaviorSubject<any> = new BehaviorSubject<any>(null);


    setData(page:number|null): void {
        this.page.next(page)
      }



    //   this.sharedDataService.data.subscribe(data => {
    //     if (!data) return

    //   });


}
