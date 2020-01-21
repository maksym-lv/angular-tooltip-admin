import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';
import { UploadImageModalComponent } from '../upload-image-modal/upload-image-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routeHome: string = '/gallery';

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {}

  onUploadImage(): void {
    this.modalService.openModal(UploadImageModalComponent);
  }

}
