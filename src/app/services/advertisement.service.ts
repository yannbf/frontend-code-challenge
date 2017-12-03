import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advertisement } from '../shared/models/index';

@Injectable()
export class AdvertisementService {
  baseUrl = 'https://api.mcmakler.de/v1';

  constructor(public http: HttpClient) {}

  getAdvertisements() {
    return this.http.get<Array<Advertisement>>(
      `${this.baseUrl}/advertisements`
    );
  }
}
