import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../components/components.module';
import { advertisementReducer } from '../../state/reducers';
import { Component } from '@angular/core';
import { AdvertisementServiceMock } from '../../services/mock/index';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent],
        imports: [
          ComponentsModule,
          StoreModule.forRoot({ estates: advertisementReducer }),
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
