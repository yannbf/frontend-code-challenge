import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../components/components.module';
import { advertisementReducer } from '../../state/reducers';
import { Component } from '@angular/core';
import { AdvertisementServiceMock } from '../../services/mock/index';

@Component({
  selector: 'app-host-component',
  template:
    '<app-advertisement-list [advertisements]="advertisements"></app-advertisement-list>',
})
class DummyHostComponent {
  advertisements = AdvertisementServiceMock.ADVERTISEMENTS;
}

describe('HomeComponent', () => {
  let component: DummyHostComponent;
  let fixture: ComponentFixture<DummyHostComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent, DummyHostComponent],
        imports: [
          ComponentsModule,
          StoreModule.forRoot({ estates: advertisementReducer }),
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
