import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ImageService } from '../../shared/services/image.service';
import { ImageModel } from '../../models/image.model';
import { TooltipConfigModel } from '../../models/tooltip-config.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-image-details-view',
  templateUrl: './image-details-view.component.html',
  styleUrls: ['./image-details-view.component.scss']
})
export class ImageDetailsViewComponent implements OnInit, OnDestroy {
  currentImage: ImageModel;
  isPreviewMode: boolean = false;
  adminToolForm: FormGroup;

  private uploadedImage: File;
  private subscription: Subscription;

  constructor(private imageService: ImageService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.imageService.getImageById(params.id).subscribe((currentImage: ImageModel) => {
        this.currentImage = currentImage;
        this.setInitFormValue(currentImage);
      });
    });

    this.initAdminToolForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onPreview(): void {
    this.isPreviewMode = true;
    this.uploadedImage ? this.saveWithImage() : this.saveWithOutImage();
  }

  onSaveChanges(): void {
    this.isPreviewMode = false;
    this.uploadedImage ? this.saveWithImage() : this.saveWithOutImage();
    this.adminToolForm.reset();
  }

  saveWithOutImage(): void {
    const updatedTooltipConfig = this.updatedTooltipConfig();
    const imageData = new ImageModel({...this.currentImage, tooltip_config: updatedTooltipConfig});
    this.currentImage = imageData;

    if (!this.isPreviewMode) {
      this.subscription = this.imageService.updateImage(imageData).subscribe();
    }
  }

  saveWithImage(): void {
    const updatedTooltipConfig = this.updatedTooltipConfig();
    const fileReader: FileReader = new FileReader();
    fileReader.readAsDataURL(this.uploadedImage);

    fileReader.onloadend = () => {
      const imageData = new ImageModel({...this.currentImage, url: fileReader.result, tooltip_config: updatedTooltipConfig});
      this.currentImage = imageData;

      if (!this.isPreviewMode) {
        this.subscription = this.imageService.updateImage(imageData).subscribe();
      }
    };
  }

  onSelectedFileHandler(uploadedFile) {
    this.uploadedImage = uploadedFile;
  }

  private initAdminToolForm(): void {
    this.adminToolForm = new FormGroup({
      tooltipText: new FormControl(),
      tooltipPlacement: new FormControl(),
      tooltipColor: new FormControl()
    });
  }

  private setInitFormValue(currentImage: ImageModel): void {
    const { title, placement, color } = currentImage.tooltip_config;
    this.adminToolForm.patchValue({
      tooltipText: title,
      tooltipPlacement: placement,
      tooltipColor: color
    });
  }

  private updatedTooltipConfig(): TooltipConfigModel {
    const { tooltipText, tooltipPlacement, tooltipColor } = this.adminToolForm.value;
    return {
      title: tooltipText,
      placement: tooltipPlacement,
      color: tooltipColor
    };
  }
}
