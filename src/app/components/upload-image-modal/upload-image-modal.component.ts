import { Component } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'app-upload-image-modal',
  templateUrl: './upload-image-modal.component.html',
  styleUrls: ['./upload-image-modal.component.scss']
})
export class UploadImageModalComponent {
  private uploadedImage: File;

  constructor(private modalService: ModalService) { }

  onCancel(): void {
    this.modalService.closeModal();
  }

  onUpload() {
    console.log(this.uploadedImage);
  }

  onSelectedFileHandler(uploadedFile) {
    this.uploadedImage = uploadedFile;
  }
}
