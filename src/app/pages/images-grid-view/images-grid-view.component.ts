import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../shared/services/image.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ImageModel } from '../../models/image.model';

@Component({
  selector: 'app-images-grid-view',
  templateUrl: './images-grid-view.component.html',
  styleUrls: ['./images-grid-view.component.scss']
})
export class ImagesGridViewComponent implements OnInit {
  images$: Observable<ImageModel[]>;

  constructor(private imageService: ImageService, private router: Router) { }

  ngOnInit() {
    this.images$ = this.imageService.getImages();
  }

  onImageRedirectHandler(event: MouseEvent): Promise<boolean> {
    const tooltip = document.querySelector('.ng-tooltip');
    tooltip.remove();

    const target = event.target as HTMLElement;
    const id = target.id;

    return this.router.navigate(['image-detail', id]);
  }

}
