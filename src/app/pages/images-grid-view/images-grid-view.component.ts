import { Component, OnDestroy, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ImageModel } from '../../models/image.model';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-images-grid-view',
  templateUrl: './images-grid-view.component.html',
  styleUrls: ['./images-grid-view.component.scss']
})
export class ImagesGridViewComponent implements  OnInit, OnDestroy {
  images$: Observable<ImageModel[]>;
  private destroySub: Subject<void> = new Subject<void>();

  constructor(private imageService: ImageService, private router: Router) { }

  ngOnInit() {
    this.images$ = this.imageService.getImages();

    this.imageService.updateImagesList$.pipe(takeUntil(this.destroySub))
      .subscribe(() => this.images$ = this.imageService.getImages());
  }

  ngOnDestroy(): void {
    this.destroySub.next();
    this.destroySub.unsubscribe();
  }

  onImageRedirectHandler(event: MouseEvent): Promise<boolean> {
    const tooltip = document.querySelector('.ng-tooltip');
    tooltip.remove();

    const target = event.target as HTMLElement;
    const id = target.id;

    return this.router.navigate(['image-detail', id]);
  }

  onDeleteImage(index): void {
    const imagesNodeList = document.querySelectorAll('.image');
    const images = Array.from(imagesNodeList);
    const selectedImage = images.filter((img) => img.getAttribute('index') === index.toString())[0];

    this.imageService.deleteImage(selectedImage.id).pipe(takeUntil(this.destroySub))
      .subscribe(() => this.imageService.updateImagesList$.next());
  }

}
