import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private sectionElement: HTMLElement | undefined;

  setSectionElement(element: HTMLElement) {
    this.sectionElement = element;
  }

  getSectionElement(): HTMLElement | undefined {
    return this.sectionElement;
  }
}