import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages';
import { advertisementReducer } from './state/reducers';
import { AdvertisementEffects } from './state/effects';
import { AdvertisementService } from './services';
import { AdvertisementServiceMock } from './services/mock';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ advertisements: advertisementReducer }),
    EffectsModule.forRoot([AdvertisementEffects]),
  ],
  providers: [AdvertisementService, AdvertisementServiceMock],
  bootstrap: [AppComponent],
})
export class AppModule {}
