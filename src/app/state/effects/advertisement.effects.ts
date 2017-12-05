import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of as obsOf } from 'rxjs/observable/of';

import {
  AdvertisementActionTypes,
  LoadAdvertisementsFailAction,
  LoadAdvertisementsSuccessAction,
} from '../actions';
import { AdvertisementService } from '../../services';
import { AdvertisementServiceMock } from '../../services/mock';

@Injectable()
export class AdvertisementEffects {
  constructor(
    private advertisementService: AdvertisementService,
    private actions$: Actions
  ) {}

  @Effect()
  loadAdvertisements$ = this.actions$
    .ofType(AdvertisementActionTypes.LOAD_ADVERTISEMENTS)
    .switchMap(() =>
      this.advertisementService
        .getAdvertisements()
        .map(
          advertisements => new LoadAdvertisementsSuccessAction(advertisements)
        )
    )
    .catch(error => obsOf(new LoadAdvertisementsFailAction(error)));
}
