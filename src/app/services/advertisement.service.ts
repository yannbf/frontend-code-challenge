import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advertisement } from '../shared/models';
import 'rxjs/add/operator/map';

@Injectable()
export class AdvertisementService {
  baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.mcmakler.de/v1';

  constructor(public http: HttpClient) {}

  getAdvertisements() {
    return this.http
      .get<Array<Advertisement>>(`${this.baseUrl}/advertisements`)
      .map((res: any) => res.data.splice(0, 10));
  }
}
