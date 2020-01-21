import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SharedModule } from '../shared.module';


@Injectable({
  providedIn: SharedModule
})
export class ModalService {
  readonly defaultOptions = {
    minWidth: '360px',
  };
  private modalRef: MatDialogRef<any>;

  constructor(private dialog: MatDialog) { }

  public openModal(component, options?): void {
    this.modalRef = this.dialog.open(component, options || this.defaultOptions);
  }

  public closeModal(): void {
    this.modalRef.close();
  }
}
