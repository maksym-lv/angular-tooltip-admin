import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class CustomTooltipDirective {
  @Input('appTooltip') tooltipTitle: string;
  @Input() placement: string;
  @Input() delay: string;
  @Input() color: string;
  tooltip: HTMLElement;
  offset = 10;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltip) { this.show(); }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) { this.hide(); }
  }

  show() {
    this.create();
    this.setPosition();
    this.renderer.addClass(this.tooltip, 'ng-tooltip-show');
  }

  hide() {
    this.renderer.removeClass(this.tooltip, 'ng-tooltip-show');
    setTimeout(() => {
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    }, parseFloat(this.delay));
  }

  create() {
    this.tooltip = this.renderer.createElement('div');

    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipTitle)
    );

    this.renderer.appendChild(document.body, this.tooltip);

    this.renderer.addClass(this.tooltip, 'ng-tooltip');
    this.renderer.addClass(this.tooltip, `ng-tooltip-${this.placement}`);
    this.renderer.setStyle(this.tooltip, 'transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, 'background', this.color);

    const arrow = this.renderer.createElement('span');
    this.renderer.addClass(arrow, 'arrow');
    this.renderer.setStyle(arrow, 'color', this.color);
    this.renderer.appendChild(this.tooltip, arrow);
  }

  setPosition() {
    const hostPos = this.el.nativeElement.getBoundingClientRect();

    const tooltipPos = this.tooltip.getBoundingClientRect();
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let top: number;
    let left: number;

    if (this.placement === 'top') {
      top = hostPos.top - tooltipPos.height - this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.placement === 'bottom') {
      top = hostPos.bottom + this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.placement === 'left') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.left - tooltipPos.width - this.offset;
    }

    if (this.placement === 'right') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.right + this.offset;
    }

    this.renderer.setStyle(this.tooltip, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
  }

}
