import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ImageModel } from '../../models/image.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UploadImageAction } from '../../actions/images.actions';
import { AppStore } from '../../interfaces/app-store';

@Component({
  selector: 'app-upload-image-modal',
  templateUrl: './upload-image-modal.component.html',
  styleUrls: ['./upload-image-modal.component.scss']
})
export class UploadImageModalComponent implements OnInit {
  loading$: Observable<boolean>;
  private uploadedImage: File;

  constructor(
    private modalService: ModalService,
    private store: Store<AppStore>
  ) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(store => store.images.loading);
  }

  onCancel(): void {
    this.modalService.closeModal();
  }

  onUpload(): void {
    const fileReader: FileReader = new FileReader();
    fileReader.readAsDataURL(this.uploadedImage);

    fileReader.onloadend = () => {
      const imageData = new ImageModel({ url: fileReader.result });
      this.store.dispatch(new UploadImageAction(imageData));
      this.onCancel();
    };
  }

  onSelectedFileHandler(uploadedFile): void {
    this.uploadedImage = uploadedFile;
  }
}
