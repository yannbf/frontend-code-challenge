import { Subscription } from 'rxjs/Subscription';
import { Component, Input, OnDestroy, HostBinding } from '@angular/core';

import { ShimmerComponentService } from './shimmer.service';

@Component({
  selector: 'app-shimmer',
  template: `<ng-content *ngIf="!isLoading"></ng-content>`,
  styleUrls: ['./shimmer.component.scss'],
})
export class ShimmerComponent implements OnDestroy {
  @HostBinding('class.loading') isLoading = true;

  private isLoadingSubscription: Subscription;
  private data: Object = {};

  public constructor(private shimmer: ShimmerComponentService) {
    this.isLoadingSubscription = this.shimmer.isLoading.subscribe(data =>
      this.updateLoading(data)
    );
  }

  public ngOnDestroy() {
    this.isLoadingSubscription.unsubscribe();
  }

  private updateLoading(data) {
    if (!data) {
      return;
    }
    this.setData(data).process();
  }

  private setData(data: Object) {
    this.data = data;
    return this;
  }

  private process() {
    this.setLoading();
  }

  private setLoading() {
    this.isLoading = this.data['isLoading'];
  }
}
