import { Action } from '@ngrx/store';
import { ImageModel } from '../models/image.model';

export enum ImagesActionTypes {
  LOAD_IMAGES = '[IMAGES] Load Images',
  LOAD_IMAGES_SUCCESS = '[IMAGES] Load Images Success',
  LOAD_IMAGES_FAILURE = '[IMAGES] Load Images Failure',
  GET_IMAGE = '[IMAGES] Get Image',
  UPLOAD_IMAGE = '[IMAGES] Upload Image',
  UPLOAD_IMAGE_SUCCESS = '[IMAGES] Upload Images Success',
  UPLOAD_IMAGE_FAILURE = '[IMAGES] Upload Images Failure',
  UPDATE_IMAGE = '[IMAGES] Update Image',
  DELETE_IMAGE = '[IMAGE] Delete Image',
  DELETE_IMAGE_SUCCESS = '[IMAGE] Delete Image Success',
  DELETE_IMAGE_FAILURE = '[IMAGE] Delete Image Failure'
}

export class LoadImagesAction implements Action {
  readonly type = ImagesActionTypes.LOAD_IMAGES;
}

export class LoadImagesSuccessAction implements Action {
  readonly type = ImagesActionTypes.LOAD_IMAGES_SUCCESS;
  constructor(public payload: ImageModel[]) {}
}

export class LoadImagesFailureAction implements Action {
  readonly type = ImagesActionTypes.LOAD_IMAGES_FAILURE;
  constructor(public payload: string) {}
}

export class GetImageAction implements Action {
  readonly type = ImagesActionTypes.GET_IMAGE;
  constructor(public payload: string) {}
}

export class UploadImageAction implements Action {
  readonly type = ImagesActionTypes.UPLOAD_IMAGE;
  constructor(public payload: ImageModel) {}
}

export class UploadImageSuccessAction implements Action {
  readonly type = ImagesActionTypes.UPLOAD_IMAGE_SUCCESS;
  constructor(public payload: ImageModel) {}
}

export class UploadImageFailureAction implements Action {
  readonly type = ImagesActionTypes.UPLOAD_IMAGE_FAILURE;
  constructor(public payload: string) {}
}

export class UpdateImageAction implements Action {
  readonly type = ImagesActionTypes.UPDATE_IMAGE;
  constructor(public payload) {}
}

export class DeleteImageAction implements Action {
  readonly type = ImagesActionTypes.DELETE_IMAGE;
  constructor(public payload: string) {}
}

export class DeleteImageSuccessAction implements Action {
  readonly type = ImagesActionTypes.DELETE_IMAGE_SUCCESS;
  constructor(public payload: string) {}
}

export class DeleteImageFailureAction implements Action {
  readonly type = ImagesActionTypes.DELETE_IMAGE_FAILURE;
  constructor(public payload: string) {}
}

export type ImagesActions =
  | LoadImagesAction | LoadImagesSuccessAction | LoadImagesFailureAction
  | GetImageAction
  | UploadImageAction | UploadImageSuccessAction | UploadImageFailureAction
  | UpdateImageAction
  | DeleteImageAction | DeleteImageSuccessAction | DeleteImageFailureAction;
