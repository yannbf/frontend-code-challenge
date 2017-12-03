import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages';
import { AdvertisementService } from './services';
import { AdvertisementServiceMock } from './services/mock';
import { advertisementReducer } from './state/reducers';
import { ComponentsModule } from './components/components.module';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, HomeComponent],
        imports: [
          ComponentsModule,
          HttpClientModule,
          StoreModule.forRoot({ estates: advertisementReducer }),
        ],
        providers: [
          { provide: AdvertisementService, useClass: AdvertisementServiceMock },
        ],
      }).compileComponents();
    })
  );
  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
  it(
    `should have as title 'Real Estatium'`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('Real Estatium');
    })
  );
});
