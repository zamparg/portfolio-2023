import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlurService {
  private blur: BehaviorSubject<boolean>;
  constructor() {
    this.blur = new BehaviorSubject<boolean>(false);
  }


  setValue(newValue:boolean): void {
    this.blur.next(newValue);
  }

  getValue(): Observable<boolean> {
    return this.blur.asObservable();
  }
}