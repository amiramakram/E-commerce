import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})

//  OnChangesده بيخليني اعرف انفذ الحاجه اول م اجي اشتغل علي انبوت
export class LightBoxDirective implements OnChanges {
@Input()highLightColor:string="white";
@Input()defaultColor:string="yellow";

  constructor(private elemRef:ElementRef) { 
    // this.elemRef.nativeElement.style.border=`3px solid ${this.defaultColor}`;
  }
  ngOnChanges(): void {
    this.elemRef.nativeElement.style.border=`3px solid ${this.defaultColor}`;
    
  }
@HostListener('mouseover')onMouseOver(){
  this.elemRef.nativeElement.style.border=`4px solid ${this.highLightColor}`;
}
@HostListener('mouseout')onMouseOut(){
  this.elemRef.nativeElement.style.border=`3px solid ${this.defaultColor}`;
}

}
