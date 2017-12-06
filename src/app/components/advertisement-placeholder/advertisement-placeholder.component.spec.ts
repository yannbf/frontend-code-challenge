import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementPlaceholderComponent } from './advertisement-placeholder.component';
import { ShimmerComponent } from '../shimmer/shimmer.component';
import { ComponentsModule } from '../components.module';

describe('AdvertisementPlaceholderComponent', () => {
  let component: AdvertisementPlaceholderComponent;
  let fixture: ComponentFixture<AdvertisementPlaceholderComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ComponentsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
