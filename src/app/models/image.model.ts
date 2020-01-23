import * as uuid from 'uuid';
import { TooltipConfigModel } from './tooltip-config.model';

export class ImageModel {
  public id: string;
  public url: string | ArrayBuffer;
  public tooltip_config: TooltipConfigModel;

  constructor(data) {
    this.id = data.id || ImageModel.getId();
    this.url = data.url;
    this.tooltip_config = new TooltipConfigModel(data.tooltip_config || {});
  }


  private static getId(): string {
    return uuid.v4();
  }
}


