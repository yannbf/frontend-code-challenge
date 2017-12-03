import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import {
  AdvertisementActionTypes,
  LoadAdvertisementsSuccessAction,
} from '../actions';
import { AdvertisementService } from '../../services/advertisement.service';
import { AdvertisementServiceMock } from '../../services/mock';

@Injectable()
export class AdvertisementEffects {
  constructor(
    private advertisementService: AdvertisementServiceMock,
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
    );
}
