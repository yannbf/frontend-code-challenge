import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AdvertisementListComponent,
  AdvertisementListItemComponent,
} from './index';

export const COMPONENTS = [
  AdvertisementListComponent,
  AdvertisementListItemComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class ComponentsModule {}
