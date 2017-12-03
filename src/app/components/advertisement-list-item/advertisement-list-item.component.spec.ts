import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertisementListItemComponent } from './advertisement-list-item.component';
import { AdvertisementServiceMock } from '../../services/mock';
import { Component } from '@angular/core';

@Component({
  selector: 'app-host-component',
  template: `
  <section class="advertisement-item">
    {{advertisement.title}}
    <div *ngIf="advertisement.advertisementAssets.advertisementThumbnails; let assets">
      <img [src]="assets.inventory_m?.url">
    </div>
    <div *ngIf="advertisement.realestateSummary; let summary">
        {{summary.numberOfRooms}}
        {{summary.space}}
        <div *ngIf="summary.address; let address">
          {{address.fullAddress}}
        </div>
    </div>
    <div *ngIf="advertisement.advertisementPrice?.baseRent; let price">{{ price | currency:'EUR'}}</div>
    <div *ngIf="!advertisement.advertisementPrice?.baseRent; let price">{{ sellPrice | currency:'EUR'}}</div>
  </section>
  `,
})
class DummyHostComponent {
  advertisement = AdvertisementServiceMock.ADVERTISEMENTS.data[0];
}

describe('AdvertisementListItemComponent', () => {
  let component: DummyHostComponent;
  let fixture: ComponentFixture<DummyHostComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DummyHostComponent],
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
