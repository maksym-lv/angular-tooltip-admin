import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ImageModel } from '../../models/image.model';
import { ImageService } from '../../services/image.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { UploadImageAction } from '../../actions/images.actions';
import { AppStore } from '../../interfaces/app-store';

@Component({
  selector: 'app-upload-image-modal',
  templateUrl: './upload-image-modal.component.html',
  styleUrls: ['./upload-image-modal.component.scss']
})
export class UploadImageModalComponent implements OnInit, OnDestroy {
  loading$: Observable<boolean>;
  private uploadedImage: File;
  private subscription: Subscription;

  constructor(
    private modalService: ModalService,
    private imageService: ImageService,
    private store: Store<AppStore>
  ) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(store => store.images.loading);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
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
