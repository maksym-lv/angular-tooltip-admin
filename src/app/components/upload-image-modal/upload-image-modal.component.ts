import { Component, OnDestroy } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';
import { ImageModel } from '../../models/image.model';
import { ImageService } from '../../shared/services/image.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upload-image-modal',
  templateUrl: './upload-image-modal.component.html',
  styleUrls: ['./upload-image-modal.component.scss']
})
export class UploadImageModalComponent implements OnDestroy {
  isLoading: boolean = false;
  private uploadedImage: File;
  private subscription: Subscription;

  constructor(private modalService: ModalService, private imageService: ImageService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onCancel(): void {
    this.modalService.closeModal();
  }

  onUpload(): void {
    this.isLoading = true;
    const fileReader: FileReader = new FileReader();
    fileReader.readAsDataURL(this.uploadedImage);

    fileReader.onloadend = () => {
      const imageData = new ImageModel({ url: fileReader.result });
      this.subscription = this.imageService.uploadImage(imageData).subscribe(() => {
        this.imageService.updateImagesList$.next();
        this.isLoading = false;
        this.onCancel();
      });
    };
  }

  onSelectedFileHandler(uploadedFile): void {
    this.uploadedImage = uploadedFile;
  }
}
