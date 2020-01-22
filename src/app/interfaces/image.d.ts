declare interface TooltipConfig {
  title: string;
  placement: string;
  color: string;
}


export declare interface Image {
  id: string;
  category: string;
  url: string;
  tooltip_config: TooltipConfig;
}
