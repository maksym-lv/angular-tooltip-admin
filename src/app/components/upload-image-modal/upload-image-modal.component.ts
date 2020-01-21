import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'app-upload-image-modal',
  templateUrl: './upload-image-modal.component.html',
  styleUrls: ['./upload-image-modal.component.scss']
})
export class UploadImageModalComponent implements OnInit {
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  onCancel(): void {
    this.modalService.closeModal();
  }

  onSave() {

  }

}
