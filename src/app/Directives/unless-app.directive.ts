import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { viewClassName } from '@angular/compiler';

@Directive({
  selector: '[appUnless]'
})
export class UnlessAppDirective {
  @Input() set appUnless(cond: boolean) {
    if (!cond) {
      this.viewElem.createEmbeddedView(this.elem);
    } else {
      this.viewElem.clear();
    }
  }

  constructor(private elem: TemplateRef<any>, private viewElem: ViewContainerRef) {

   }

}
