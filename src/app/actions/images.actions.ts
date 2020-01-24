import { Action } from '@ngrx/store';
import { ImageModel } from '../models/image.model';

export enum ImagesActionTypes {
  LOAD_IMAGES = '[IMAGES] Load Images',
  LOAD_IMAGES_SUCCESS = '[IMAGES] Load Images Success',
  LOAD_IMAGES_FAILURE = '[IMAGES] Load Images Failure',
  LOAD_SELECTED_IMAGE = '[IMAGES] Load Selected Image',
  LOAD_SELECTED_IMAGE_SUCCESS = '[IMAGES] Load Selected Image Success',
  LOAD_SELECTED_IMAGE_FAILURE = '[IMAGES] Load Selected Image Failure',
  UPLOAD_IMAGE = '[IMAGES] Upload Image',
  UPLOAD_IMAGE_SUCCESS = '[IMAGES] Upload Images Success',
  UPLOAD_IMAGE_FAILURE = '[IMAGES] Upload Images Failure',
  UPDATE_IMAGE = '[IMAGES] Update Image',
  UPDATE_IMAGE_SUCCESS = '[IMAGES] Update Image Success',
  UPDATE_IMAGE_FAILURE = '[IMAGES] Update Image Failure',
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

export class LoadSelectedImageAction implements Action {
  readonly type = ImagesActionTypes.LOAD_SELECTED_IMAGE;
  constructor(public payload: string) {}
}

export class LoadSelectedImageSuccessAction implements Action {
  readonly type = ImagesActionTypes.LOAD_SELECTED_IMAGE_SUCCESS;
  constructor(public payload: string) {}
}

export class LoadSelectedImageFailureAction implements Action {
  readonly type = ImagesActionTypes.LOAD_SELECTED_IMAGE_FAILURE;
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
  constructor(public payload: ImageModel) {}
}

export class UpdateImageSuccessAction implements Action {
  readonly type = ImagesActionTypes.UPDATE_IMAGE_SUCCESS;
  constructor(public payload: ImageModel) {}
}

export class UpdateImageFailureAction implements Action {
  readonly type = ImagesActionTypes.UPDATE_IMAGE_FAILURE;
  constructor(public payload: string) {}
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
  | LoadSelectedImageAction | LoadSelectedImageSuccessAction | LoadSelectedImageFailureAction
  | UploadImageAction | UploadImageSuccessAction | UploadImageFailureAction
  | UpdateImageAction | UpdateImageSuccessAction | UpdateImageFailureAction
  | DeleteImageAction | DeleteImageSuccessAction | DeleteImageFailureAction;
