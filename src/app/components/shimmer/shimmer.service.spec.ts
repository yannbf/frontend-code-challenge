import { TestBed, inject } from '@angular/core/testing';
import { ShimmerComponentService } from './shimmer.service';

describe('ShimmerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShimmerComponentService],
    });
  });

  it(
    'should be created',
    inject([ShimmerComponentService], (service: ShimmerComponentService) => {
      expect(service).toBeTruthy();
    })
  );
});
