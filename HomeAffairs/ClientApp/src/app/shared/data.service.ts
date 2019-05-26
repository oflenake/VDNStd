/**
 * DataService that can return the database synchronously as 
 * an object (default), as an observable, or as a promise.
 *
 * Add the following line to `AppModule.imports`
 *   InMemoryWebApiModule.forRoot(DataService) // or DataOverrideService
 */
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

// Entity collections for the DBContext,
// accessed and serviced via DataService
import { HomeBuildVersion } from '../entities/homebuildversion';
import { Users } from '../entities/users';
import { UsersProfile } from '../entities/usersprofile';

//@Injectable({
//  providedIn: 'root'
//})
@Injectable()
export class DataService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo) {

    const allusers = [
      {
        UserID: 1, UserName: 'onkgopotselenake', UserPassword: 'Password1', Salt: 'onkgopotselenake',
        UserEmail: 'gupilenake@gmail.com', IsActive: true
      },
      {
        UserID: 2, UserName: 'kgupilenake', UserPassword: 'Password1', Salt: 'kgupilenake',
        UserEmail: 'visiondreamict@gmail.com', IsActive: true
      },
      {
        UserID: 3, UserName: 'homeusercandidate', UserPassword: 'Password1', Salt: 'homeusercandidate',
        UserEmail: 'homeuser.candidate@home-affairs.visiondream.local', IsActive: false
      },
      {
        UserID: 4, UserName: 'homeuserprobe', UserPassword: 'Password1', Salt: 'homeuserprobe',
        UserEmail: 'homeuser.probe@home-affairs.visiondream.local', IsActive: false
      }
    ];

    const allusersprofile = [
      {
        UsersProfileID: 1, UserID: 1, Title: 'Dr', Initials: 'O F', FirstName: 'Onkgopotse', LastName: 'Lenake',
        IDNumber: '9204265674083', DateOfBirth: '1992/04/26', Email: 'gupilenake@gmail.com', CellPhone: '0726870991',
        Province: 'Gauteng', Address: '10011 Phakathi Street', City: 'Soweto', Suburb: 'Dobsonville Ext 3', Code: '1863'
      },
      {
        UsersProfileID: 2, UserID: 2, Title: 'Mr', Initials: 'K', FirstName: 'Kgupi', LastName: 'Lenake',
        IDNumber: '8910015674085', DateOfBirth: '1989/10/01', Email: 'visiondreamict@gmail.com', CellPhone: '0726870991',
        Province: 'North West', Address: '1234 Kgame Street', City: 'Lethabong', Suburb: 'Lephale', Code: '263'
      },
      {
        UsersProfileID: 3, UserID: 3, Title: 'Miss', Initials: 'H U', FirstName: 'HomeUser', LastName: 'Candidate',
        IDNumber: '9204265674083', DateOfBirth: '1992/04/26', Email: 'homeuser.candidate@home-affairs.visiondream.local',
        CellPhone: '0726870991', Province: 'Mpumalanga', Address: '432 Jaca Drive', City: 'Nelspruit',
        Suburb: 'West Acres', Code: '1200'
      },
      {
        UsersProfileID: 4, UserID: 4, Title: 'Mrs', Initials: 'H', FirstName: 'HomeUser', LastName: 'Probe',
        IDNumber: '8910015674085', DateOfBirth: '1989/10/01', Email: 'homeuser.probe@home-affairs.visiondream.local',
        CellPhone: '0726870991', Province: 'KwaZulu-Natal', Address: '28 Palms Avenue', City: 'Durban',
        Suburb: 'Dandi', Code: '4000'
      }
    ];

    const homebuildversions = [
      {
        SystemInformationID: 1, Title: 'HomeAffairs', Alias: 'App ver: ', Version: '1.2.0.0',
        VDDesc: 'Vision-Dream ICT Solutions', VDCopyright: '2019 Vision-Dream, Inc. All rights reserved.',
        VDUrlLocal: 'http://visiondream.local', VDUrlExternal: 'https://visiondreamict.wordpress.com'
      }
    ];

    // default returnType
    let returnType = 'object';
    // let returnType  = 'observable';
    // let returnType  = 'promise';

    // POST commands/resetDb
    // Clear collections if the request body instructs so
    if (reqInfo) {
      const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
      if (body.clear === true) {
        allusers.length = 0;
        allusersprofile.length = 0;
        homebuildversions.length = 0;
      }

      // 'returnType` can be 'object' | 'observable' | 'promise'
      returnType = body.returnType || 'object';
    }

      const db = { allusers, allusersprofile, homebuildversions };

      switch (returnType) {
        case ('observable'):
          return of(db).pipe(delay(10));
        case ('promise'):
          return new Promise(resolve => {
            setTimeout(() => resolve(db), 10);
          });
        default:
          return db;

        //return { allusers };
      }
  }

  // Overrides the genId method using polymorphism, to ensure that each entity instance always has an id.
  // If any of the collection list arrays are empty, the appropriate method below returns the initial number (1).
  // If any of the collection list arrays are not empty, the appropriate method below returns the highest collection list
  // instance id + 1.
  /*--
  genId(allusers: Users[]): number {
    return allusers.length > 0 ? Math.max(...allusers.map(users => users.UserID)) + 1 : 1;
  }
  --*/
}
