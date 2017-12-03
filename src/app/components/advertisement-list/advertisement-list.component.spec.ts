import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementListComponent } from './advertisement-list.component';
import { ComponentsModule } from '../components.module';

describe('AdvertisementListComponent', () => {
  let component: AdvertisementListComponent;
  let fixture: ComponentFixture<AdvertisementListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ComponentsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
