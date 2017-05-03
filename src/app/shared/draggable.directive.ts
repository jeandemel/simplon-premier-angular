import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[siDraggable]'
})
export class DraggableDirective {

  constructor(private element: ElementRef) { }
  // private clicked:boolean = false;

  // @HostListener('mousedown')
  // clickEnCours() {

  //   this.clicked = true;
  // }
  // @HostListener('mouseup')
  // finDuClick() {
  //   this.clicked = false;
  // }
  @HostListener('mousemove', ['$event'])
  deplacement(event) {
    if (event.buttons === 1) {
      let domElement: HTMLElement = this.element.nativeElement;
      domElement.style.position = 'absolute';
      domElement.style.left = event.clientX - (domElement.offsetWidth / 2) + 'px';
      domElement.style.top = event.clientY - (domElement.offsetHeight) + 'px';
    }
  }
}
