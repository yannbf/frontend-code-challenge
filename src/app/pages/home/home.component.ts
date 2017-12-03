import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Advertisement } from '../../shared/models';
import { AdvertisementState } from '../../state/reducers';
import { LoadAdvertisementsAction } from '../../state/actions';
import { AdvertisementService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  advertisements$: Observable<Array<Advertisement>>;

  constructor(public store: Store<AdvertisementState>) {
    this.advertisements$ = this.store.select<Array<Advertisement>>(
      (state: any) => state.estates.advertisements
    );
  }

  ngOnInit() {
    this.getAdvertisements();
  }

  getAdvertisements() {
    this.store.dispatch(new LoadAdvertisementsAction());
  }
}
