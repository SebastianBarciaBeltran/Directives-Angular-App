import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _message: string = 'Este campo es requerido.';
  // private _isValid: boolean = false;

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(color: string){
      // this.htmlElement.nativeElement.style.color = color;
      this._color = color;
      this.setColor();
    };

    @Input() set message(message: string){
      // this.htmlElement.nativeElement.innerText = message;
      this._message = message;
      this.setMessage();
  };

    @Input() set isValid(value: boolean){
      console.log('value: ', value);
      if (value) {
        this.htmlElement.nativeElement.classList.remove('hidden');
      } else {
        this.htmlElement.nativeElement.classList.add('hidden');
      }
  };

  // @Input() color: string = '';
  // @Input() message: string = '';

  constructor(private _el: ElementRef<HTMLElement>) {
    this.htmlElement = _el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.message) {
    //     const message = changes.message.currentValue;
    //     this.htmlElement.nativeElement.innerText = message;
    // }

    // if(changes.color){
    //   const color = changes.color.currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this._message;
  }

  // setStyle(){
  //   this.htmlElement.nativeElement.classList.add('form-text');
  // }
}
