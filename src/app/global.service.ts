import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  roleData = '';
  quoteID = '';
  public roleDataSource = new BehaviorSubject<any>(this.roleData);
  public quoteIDSource = new BehaviorSubject<any>(this.quoteID);

  // For update role
  get roleDataSource$(): any {
    return this.roleDataSource.asObservable();
  }
  roleDataUpdated(data: string): void {
    this.roleDataSource.next(data);
  }

  // For quote ID
  get quoteIDSource$(): any {
    return this.quoteIDSource.asObservable();
  }
  quoteIdUpdate(data: string): void {
    this.quoteIDSource.next(data);
  }

  constructor() { }
}
