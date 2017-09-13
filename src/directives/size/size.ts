import {Directive, Input, AfterViewInit, ElementRef, Renderer2} from '@angular/core';

/**
 * Generated class for the SizeDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[size]' // Attribute selector
})
export class SizeDirective implements AfterViewInit{
  @Input('size') size: Object;
  constructor(private el: ElementRef,private render: Renderer2) {
  }

  ngAfterViewInit() {
    this.render.setStyle(this.el.nativeElement, 'width', this.size['width'] + 'vw');
  }

}
