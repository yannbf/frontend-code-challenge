import { Action } from '@ngrx/store';

import { Advertisement } from '../../shared/models';

export enum AdvertisementActionTypes {
  LOAD_ADVERTISEMENTS = '[Advertisement] Load Advertisement',
  LOAD_ADVERTISEMENTS_SUCCESS = '[Advertisement] Load Advertisement Success',
  LOAD_ADVERTISEMENTS_FAIL = '[Advertisement] Load Advertisement Fail',
}

export class LoadAdvertisementsAction implements Action {
  readonly type = AdvertisementActionTypes.LOAD_ADVERTISEMENTS;
  constructor() {}
}

export class LoadAdvertisementsSuccessAction implements Action {
  readonly type = AdvertisementActionTypes.LOAD_ADVERTISEMENTS_SUCCESS;
  constructor(public payload: Array<Advertisement>) {}
}

export class LoadAdvertisementsFailAction implements Action {
  readonly type = AdvertisementActionTypes.LOAD_ADVERTISEMENTS_FAIL;
  constructor(public payload: any) {}
}

export type AdvertisementActions =
  | LoadAdvertisementsAction
  | LoadAdvertisementsSuccessAction
  | LoadAdvertisementsFailAction;
