import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShimmerComponent } from './shimmer.component';
import { ShimmerComponentService } from './shimmer.service';

describe('ShimmerComponent', () => {
  let component: ShimmerComponent;
  let fixture: ComponentFixture<ShimmerComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ShimmerComponent],
        providers: [ShimmerComponentService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
