import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ImageModel } from '../../models/image.model';
import { Store } from '@ngrx/store';
import { DeleteImageAction, LoadImagesAction } from '../../actions/images.actions';
import { AppStore } from '../../interfaces/app-store';

@Component({
  selector: 'app-images-grid-view',
  templateUrl: './images-grid-view.component.html',
  styleUrls: ['./images-grid-view.component.scss']
})
export class ImagesGridViewComponent implements  OnInit {
  images: Observable<ImageModel[]>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;

  constructor(
    private imageService: ImageService,
    private router: Router,
    private store: Store<AppStore>
  ) { }

  ngOnInit() {
    this.images = this.store.select(store => store.images.list);
    this.loading$ = this.store.select(store => store.images.loading);
    this.error$ = this.store.select(store => store.images.error);
    this.store.dispatch(new LoadImagesAction());
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

    this.store.dispatch(new DeleteImageAction(selectedImage.id));
  }

}
