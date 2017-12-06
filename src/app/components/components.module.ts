import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AdvertisementListComponent,
  AdvertisementListItemComponent,
  AdvertisementPlaceholderComponent,
  ShimmerComponentModule,
} from './index';

export const COMPONENTS = [
  AdvertisementListComponent,
  AdvertisementListItemComponent,
  AdvertisementPlaceholderComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ShimmerComponentModule],
  exports: [...COMPONENTS, ShimmerComponentModule],
})
export class ComponentsModule {}
