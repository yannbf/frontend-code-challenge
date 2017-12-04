import { AdvertisementActions, AdvertisementActionTypes } from '../actions';
import { Advertisement } from '../../shared/models';

export interface AdvertisementState {
  error: any;
  advertisements: Array<Advertisement>;
}

export function advertisementReducer(
  state,
  action: AdvertisementActions
): AdvertisementState {
  switch (action.type) {
    case AdvertisementActionTypes.LOAD_ADVERTISEMENTS_SUCCESS: {
      return {
        ...state,
        advertisements: action.payload,
      };
    }

    case AdvertisementActionTypes.LOAD_ADVERTISEMENTS_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}
