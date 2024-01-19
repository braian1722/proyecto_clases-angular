import { Directive, ElementRef, Renderer2,Input, OnChanges,SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnChanges {
  @Input()
  color = 'red';

  constructor(private elementRef: ElementRef,private renderer: Renderer2) {
    console.log('se instacio la directiva' ,this.elementRef);

    this.renderColor();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.renderColor();
  }//cuando hay un cambio ejecuta el cambio

  renderColor(): void{
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color',this.color); 
  }

}
