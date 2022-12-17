import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf( value: boolean){
    if (value) {
      this._viewContainerRef.createEmbeddedView( this._templateRef )
    } else {
      this._viewContainerRef.clear();
    }
  }

  constructor(private _templateRef: TemplateRef<HTMLElement>,
              private _viewContainerRef: ViewContainerRef
              ) {
  }



}
