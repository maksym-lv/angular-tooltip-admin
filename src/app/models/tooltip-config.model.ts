export class TooltipConfigModel {
  public title: string;
  public placement: 'top' | 'bottom' | 'right' | 'left';
  public color: string;

  constructor(data) {
    this.title = data.title || 'Default text';
    this.placement = data.placement || 'top';
    this.color = data.color || 'red';
  }
}
