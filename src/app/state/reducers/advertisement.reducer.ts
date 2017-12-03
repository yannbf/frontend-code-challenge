import { AdvertisementActions, AdvertisementActionTypes } from '../actions';
import { Advertisement } from '../../shared/models';

export interface AdvertisementState {
  advertisements: Array<Advertisement>;
  error: any;
}

export function advertisementReducer(
  state,
  action: AdvertisementActions
): AdvertisementState {
  switch (action.type) {
    case AdvertisementActionTypes.LOAD_ADVERTISEMENTS_SUCCESS: {
      return {
        error: null,
        advertisements: action.payload,
      };
    }

    case AdvertisementActionTypes.LOAD_ADVERTISEMENTS_FAIL: {
      return {
        error: action.payload,
        advertisements: null,
      };
    }

    default:
      return state;
  }
}