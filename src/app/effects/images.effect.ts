import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
  DeleteImageAction,
  DeleteImageFailureAction,
  DeleteImageSuccessAction,
  ImagesActionTypes,
  LoadImagesAction,
  LoadImagesFailureAction,
  LoadImagesSuccessAction,
  LoadSelectedImageAction,
  LoadSelectedImageFailureAction,
  LoadSelectedImageSuccessAction,
  UploadImageAction,
  UploadImageFailureAction,
  UploadImageSuccessAction
} from '../actions/images.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ImageService } from '../services/image.service';
import { of } from 'rxjs';

@Injectable()
export class ImagesEffect {
  constructor(private actions$: Actions, private imageService: ImageService) {}

  @Effect()
  loadImages$ = this.actions$.pipe(
    ofType<LoadImagesAction>(ImagesActionTypes.LOAD_IMAGES),
    mergeMap(() => this.imageService.getImages()
      .pipe(
        map(data => new LoadImagesSuccessAction(data)),
        catchError( err => of(new LoadImagesFailureAction(err)))
      )
    )
  );

  @Effect()
  loadSelectedImage$ = this.actions$.pipe(
    ofType<LoadSelectedImageAction>(ImagesActionTypes.LOAD_SELECTED_IMAGE),
    mergeMap(data => this.imageService.getImageById(data.payload)
      .pipe(
        map(() => new LoadSelectedImageSuccessAction(data.payload)),
        catchError( err => of(new LoadSelectedImageFailureAction(err)))
      )
    )
  );

  @Effect()
  uploadImage$ = this.actions$.pipe(
    ofType<UploadImageAction>(ImagesActionTypes.UPLOAD_IMAGE),
    mergeMap(data => this.imageService.uploadImage(data.payload)
      .pipe(
        map(() => new UploadImageSuccessAction(data.payload)),
        catchError( err => of(new UploadImageFailureAction(err)))
      )
    )
  );

  @Effect()
  updateImage$ = this.actions$.pipe(
    ofType<UploadImageAction>(ImagesActionTypes.UPDATE_IMAGE),
    mergeMap(data => this.imageService.updateImage(data.payload)
      .pipe(
        map(() => new UploadImageSuccessAction(data.payload)),
        catchError( err => of(new UploadImageFailureAction(err)))
      )
    )
  );

  @Effect()
  deleteImage$ = this.actions$.pipe(
    ofType<DeleteImageAction>(ImagesActionTypes.DELETE_IMAGE),
    mergeMap(data => this.imageService.deleteImage(data.payload)
      .pipe(
        map(() => new DeleteImageSuccessAction(data.payload)),
        catchError( err => of(new DeleteImageFailureAction(err)))
      )
    )
  );
}
