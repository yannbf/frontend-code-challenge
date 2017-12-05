import { AdvertisementActions, AdvertisementActionTypes } from '../actions';
import { Advertisement } from '../../shared/models';

export interface AdvertisementState {
  error: any;
  advertisements: Array<Advertisement>;
  isLoading: boolean;
}

export function advertisementReducer(
  state,
  action: AdvertisementActions
): AdvertisementState {
  switch (action.type) {
    case AdvertisementActionTypes.LOAD_ADVERTISEMENTS: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }

    case AdvertisementActionTypes.LOAD_ADVERTISEMENTS_SUCCESS: {
      return {
        ...state,
        advertisements: action.payload,
        isLoading: false,
        error: null,
      };
    }

    case AdvertisementActionTypes.LOAD_ADVERTISEMENTS_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}
