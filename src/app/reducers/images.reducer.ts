import { ImagesActions, ImagesActionTypes } from '../actions/images.actions';
import { ImageModel } from '../models/image.model';

export interface ImagesState {
  list: ImageModel[];
  loading: boolean;
  error: Error;
}

const initialState: ImagesState = {
  list: [],
  loading: false,
  error: undefined
};

export function ImagesReducer(
  state: ImagesState = initialState,
  action: ImagesActions
) {
  switch (action.type) {
    case ImagesActionTypes.LOAD_IMAGES:
      return {
        ...state,
        loading: true
      };

    case ImagesActionTypes.LOAD_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload
      };

    case ImagesActionTypes.LOAD_IMAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case ImagesActionTypes.LOAD_SELECTED_IMAGE:
      return {
        ...state,
        loading: true
      };

    case ImagesActionTypes.LOAD_SELECTED_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter(item => item.id === action.payload)
      };

    case ImagesActionTypes.LOAD_SELECTED_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case ImagesActionTypes.UPLOAD_IMAGE:
      return {
        ...state,
        loading: true
      };

    case ImagesActionTypes.UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...state.list, action.payload]
      };

    case ImagesActionTypes.UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case ImagesActionTypes.UPDATE_IMAGE:
      return {
        ...state,
        loading: true
      };

    case ImagesActionTypes.UPDATE_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.slice()
      };

    case ImagesActionTypes.UPDATE_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case ImagesActionTypes.DELETE_IMAGE:
      return {
        ...state,
        loading: true
      };

    case ImagesActionTypes.DELETE_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter(item => item.id !== action.payload)
      };

    case ImagesActionTypes.DELETE_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
