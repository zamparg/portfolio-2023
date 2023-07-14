import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private sectionElement: HTMLElement | undefined;
  private isVisible:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private listener:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);


  setSectionElement(element: HTMLElement) {
    this.sectionElement = element;
  }

  getSectionElement(): HTMLElement | undefined {
    return this.sectionElement;
  }

  setVisibility(value: boolean) {
    this.isVisible.next(value);
  }

  getVisibility(){
    return this.isVisible.asObservable();
  }

  setListener(value: boolean) {
    if(!value){
      this.listener.next(value);
      setTimeout(() => {
        this.listener.next(!value);
        console.log('SE SUPONE QUE VOLVIO LA EJECUCIÓN')
      }, 1000);
    }
  }

  getListener(){
    return this.listener.asObservable();
  }
}