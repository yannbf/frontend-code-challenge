import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementListComponent } from './index';

export const COMPONENTS = [AdvertisementListComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class ComponentsModule {}
