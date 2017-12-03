import { AdvertisementActions, AdvertisementActionTypes } from '../actions';

export function advertisementReducer(state = [], action: AdvertisementActions) {
  switch (action.type) {
    case AdvertisementActionTypes.LOAD_ADVERTISEMENTS_SUCCESS: {
      return action.payload;
    }

    case AdvertisementActionTypes.LOAD_ADVERTISEMENTS_FAIL: {
      return action.payload;
    }

    default:
      return state;
  }
}
