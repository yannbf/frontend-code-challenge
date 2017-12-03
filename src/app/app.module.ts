import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { advertisementReducer } from './state/reducers';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ advertisements: advertisementReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
