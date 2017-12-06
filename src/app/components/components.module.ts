import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AdvertisementListComponent,
  AdvertisementListItemComponent,
  ShimmerComponentModule,
} from './index';

export const COMPONENTS = [
  AdvertisementListComponent,
  AdvertisementListItemComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ShimmerComponentModule],
  exports: [...COMPONENTS, ShimmerComponentModule],
})
export class ComponentsModule {}
