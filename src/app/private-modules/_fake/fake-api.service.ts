import { Injectable } from '@angular/core';
import { APIPathConstants } from '@sharedModule/constants';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { UsersTable } from './users.table';

@Injectable({
  providedIn: 'root',
})
export class FakeAPIService implements InMemoryDbService {
  constructor() {}

  /**
   * Create Fake DB and API
   */
  createDb(): {} | Observable<{}> {
    const db = {
      [APIPathConstants.USER]: UsersTable.users,
    };
    return db;
  }
}
