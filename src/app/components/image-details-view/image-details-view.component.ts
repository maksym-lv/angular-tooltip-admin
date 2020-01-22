import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ImageService } from '../../shared/services/image.service';

@Component({
  selector: 'app-image-details-view',
  templateUrl: './image-details-view.component.html',
  styleUrls: ['./image-details-view.component.scss']
})
export class ImageDetailsViewComponent implements OnInit {
  currentImage: any;
  isPreviewMode: boolean = false;
  adminToolForm: FormGroup;

  constructor(private imageService: ImageService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.currentImage = this.imageService.getImageById(params.id)[0];
    });

    this.initAdminToolForm();
  }

  onPreview() {
    this.isPreviewMode = true;
    const { updateTooltipText, updateTooltipPlacement, updateTooltipColor } = this.adminToolForm.value;

    const mapObj = {
      title: updateTooltipText,
      placement: updateTooltipPlacement,
      color: updateTooltipColor
    };

    for (const field in mapObj) {
      if (mapObj.hasOwnProperty(field) && mapObj[field] !== null) {
        this.currentImage.tooltip_config[field] = mapObj[field];
      }
    }
  }

  onSaveChanges() {
    this.isPreviewMode = false;
    const { updateTooltipText, updateTooltipPlacement, updateTooltipColor } = this.adminToolForm.value;

    const mapObj = {
      title: updateTooltipText,
      placement: updateTooltipPlacement,
      color: updateTooltipColor
    };

    for (const field in mapObj) {
      if (mapObj.hasOwnProperty(field) && mapObj[field] !== null) {
        this.currentImage.tooltip_config[field] = mapObj[field];
      }
    }
  }

  private initAdminToolForm(): void {
    this.adminToolForm = new FormGroup({
      updateImage: new FormControl(),
      updateTooltipText: new FormControl(),
      updateTooltipPlacement: new FormControl(),
      updateTooltipColor: new FormControl()
    });
  }

}
