import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AdvertisementService } from './advertisement.service';
import { AdvertisementServiceMock } from './mock/advertisement.service.mock';

describe('AdvertisementService', () => {
  let advertisementService: AdvertisementService;
  let httpMock: HttpTestingController;
  const endpoint = 'https://api.mcmakler.de/v1/advertisements';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdvertisementService],
    });

    advertisementService = TestBed.get(AdvertisementService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(
    'should be created',
    inject([AdvertisementService], (service: AdvertisementService) => {
      expect(service).toBeTruthy();
    })
  );

  describe('#getAdvertisements', () => {
    afterEach(() => {
      httpMock.verify();
    });

    it('should return a list of 15 advertisements', () => {
      const mockAdvertisements = AdvertisementServiceMock.ADVERTISEMENTS;
      advertisementService.getAdvertisements().subscribe(advertisements => {
        expect(advertisements.length).toBe(15);
      });

      const req = httpMock.expectOne(endpoint);
      expect(req.request.method).toBe('GET');
      req.flush(mockAdvertisements);
    });
  });
});
