import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ImageService } from '../../shared/services/image.service';
import { Image, TooltipConfig } from '../../interfaces/image';

@Component({
  selector: 'app-image-details-view',
  templateUrl: './image-details-view.component.html',
  styleUrls: ['./image-details-view.component.scss']
})
export class ImageDetailsViewComponent implements OnInit {
  currentImage: Image;
  isPreviewMode: boolean = false;
  adminToolForm: FormGroup;

  constructor(private imageService: ImageService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.imageService.getImageById(params.id).subscribe((currentImage: Image) => {
        this.currentImage = currentImage;
        this.setInitFormValue(currentImage);
      });
    });

    this.initAdminToolForm();
  }

  onPreview(): void {
    this.isPreviewMode = true;
    const updatedTooltipConfig = this.buildUpdatedImageData();
    this.currentImage = {...this.currentImage, tooltip_config: updatedTooltipConfig};
  }

  onSaveChanges(): void {
    this.isPreviewMode = false;
    const updatedTooltipConfig = this.buildUpdatedImageData();
    this.currentImage = {...this.currentImage, tooltip_config: updatedTooltipConfig};
    this.imageService.updateImage(this.currentImage);
  }

  private initAdminToolForm(): void {
    this.adminToolForm = new FormGroup({
      tooltipText: new FormControl(),
      tooltipPlacement: new FormControl(),
      tooltipColor: new FormControl()
    });
  }

  private setInitFormValue(currentImage: Image): void {
    const { title, placement, color } = currentImage.tooltip_config;
    this.adminToolForm.patchValue({
      tooltipText: title,
      tooltipPlacement: placement,
      tooltipColor: color
    });
  }

  private buildUpdatedImageData(): TooltipConfig {
    const { tooltipText, tooltipPlacement, tooltipColor } = this.adminToolForm.value;
    return {
      title: tooltipText,
      placement: tooltipPlacement,
      color: tooltipColor
    };
  }
}
