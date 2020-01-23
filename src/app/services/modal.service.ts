import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Injectable({
  providedIn: 'root'
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
