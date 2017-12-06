import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

export class ShimmerComponentService {
  private isLoading$ = new BehaviorSubject<Object>(false);
  public isLoading = this.isLoading$.asObservable();

  public setLoading(isLoading: boolean) {
    this.isLoading$.next({ isLoading: isLoading });
  }
}
