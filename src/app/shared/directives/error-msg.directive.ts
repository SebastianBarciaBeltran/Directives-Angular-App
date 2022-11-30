import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() message: string = '';

  constructor(private _el: ElementRef<HTMLElement>) {
    this.htmlElement = _el;
  }

  ngOnInit(): void {
    console.log('ngOnInit directive');
    this.setColor();
    this.setMessage();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this.message;
  }

}
