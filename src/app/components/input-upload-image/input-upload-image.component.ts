import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-upload-image',
  templateUrl: './input-upload-image.component.html',
  styleUrls: ['./input-upload-image.component.scss']
})
export class InputUploadImageComponent  {
  @Output() selectedFile: EventEmitter<File> = new EventEmitter<File>();

  onUploadFileHandler(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files[0];

    this.selectedFile.emit(file);
  }
}
