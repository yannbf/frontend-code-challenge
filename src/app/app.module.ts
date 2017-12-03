import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages';
import { advertisementReducer } from './state/reducers';
import { AdvertisementEffects } from './state/effects';
import { AdvertisementService } from './services';
import { AdvertisementServiceMock } from './services/mock';
import { environment } from './../environments/environment';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ estates: advertisementReducer }),
    EffectsModule.forRoot([AdvertisementEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    ComponentsModule,
  ],
  providers: [AdvertisementService, AdvertisementServiceMock],
  bootstrap: [AppComponent],
})
export class AppModule {}
