import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShimmerComponent } from './shimmer.component';
import { ShimmerComponentService } from './shimmer.service';

@NgModule({
  declarations: [ShimmerComponent],
  exports: [ShimmerComponent],
  imports: [CommonModule],
  providers: [ShimmerComponentService],
})
export class ShimmerComponentModule {}
