import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { tap, catchError, map } from 'rxjs/operators';

import { HomeBuildVersion } from '../entities/homebuildversion';
import { Users } from '../entities/users';
import { UsersProfile } from '../entities/usersprofile';
import { AppService } from './app.service';
import { MessageService } from './message.service';
import { of } from 'rxjs/observable/of';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class HttpClientAppService extends AppService {
  user: Users[];

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
    super();
  }

  /****-------------------- HomeBuildVersion entity CRUD implementation: Start --------------------****/
  /** GET homebuildversions from the server */
  getHomeBuildVersions(): Observable<HomeBuildVersion[]> {
    return this.http.get<HomeBuildVersion[]>(this.ehomeUrl)
      .pipe(
        tap(_ => this.log('fetched homebuildversions')),
        catchError(this.handleError('getHomeBuildVersions', []))
      );
  }

  /** GET homebuildversion by id will 404 if id not found */
  getHomeBuildVersion(id: number): Observable<HomeBuildVersion> {
    const url = `${this.ehomeUrl}/${id}`;
    return this.http.get<HomeBuildVersion>(url)
      .pipe(
      tap(_ => this.log(`fetched homebuildversion ID = ${id}`)),
      catchError(this.handleError<HomeBuildVersion>(`getHomeBuildVersion ID = ${id}`))
      );
  }

  /** GET homebuildversions whose title contains search term */
  searchHomeBuildVersions(term: string): Observable<HomeBuildVersion[]> {
    if (!term.trim()) {
      // if not search term, return empty homebuildversion array.
      return of([]);
    }
    return this.http.get<HomeBuildVersion[]>(`${this.ehomeUrl}/?title=${term}`)
      .pipe(
        tap(_ => this.log(`found homebuildversions matching "${term}"`)),
        catchError(this.handleError<HomeBuildVersion[]>('searchHomeBuildVersions', []))
      );
  }

  //searchHomeBuildVersions(term: string): Observable<HomeBuildVersion[]> {
  //  term = term.trim();
  //  // add safe, encoded search parameter if term is present
  //  const options = term ?
  //    { params: new HttpParams().set('name', term) } : {};

  //  return this.http.get<HomeBuildVersion[]>(this.ehomeUrl, options).pipe(
  //    catchError(this.handleError)
  //  );
  //}

  //////// Save methods //////////

  /** POST: add a new homebuildversion to the server */
  addHomeBuildVersion(title: string): Observable<HomeBuildVersion> {
    return this.http.post<HomeBuildVersion>(this.ehomeUrl, title, httpOptions)
      .pipe(
        tap((newHomeBuildVersion: HomeBuildVersion) =>
        this.log(`added homebuildversion w/ ID = ${newHomeBuildVersion.SystemInformationID}`)),
        catchError(this.handleError<HomeBuildVersion>('addHomeBuildVersion'))
      );
  }

  /** DELETE: delete the homebuildversion from the server */
  deleteHomeBuildVersion(homebuildversion: HomeBuildVersion | number): Observable<HomeBuildVersion> {
    const id = typeof homebuildversion === 'number' ? homebuildversion : homebuildversion.SystemInformationID;
    const url = `${this.ehomeUrl}/${id}`;

    return this.http.delete<HomeBuildVersion>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted homebuildversion ID = ${id}`)),
        catchError(this.handleError<HomeBuildVersion>('deleteHomeBuildVersion'))
      );
  }

  /** PUT: update the homebuildversion on the server */
  updateHomeBuildVersion(homebuildversion: HomeBuildVersion): Observable<any> {
    return this.http.put(this.ehomeUrl, homebuildversion, httpOptions)
      .pipe(
        tap(_ => this.log(`updated homebuildversion ID = ${homebuildversion.SystemInformationID}`)),
        catchError(this.handleError<any>('updateHomeBuildVersion'))
      );
  }
  /****-------------------- HomeBuildVersion entity CRUD implementation: End --------------------****/


  /****-------------------- Users entity CRUD implementation: Start --------------------****/
  /** GET allusers from the server */
  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.ehomeUrl)
      .pipe(
        tap(_ => this.log('fetched allusers')),
        catchError(this.handleError('getAllUsers', []))
      );
  }

  /** GET users by id will 404 if id not found */
  getUsers(id: number): Observable<Users> {
    const url = `${this.ehomeUrl}/${id}`;
    return this.http.get<Users>(url)
      .pipe(
        tap(_ => this.log(`fetched users ID = ${id}`)),
        catchError(this.handleError<Users>(`getUsers ID = ${id}`))
      );
  }

  /** GET allusers whose title contains search term */
  searchAllUsers(term: string): Observable<Users[]> {
    if (!term.trim()) {
      // if not search term, return empty users array.
      return of([]);
    }
    return this.http.get<Users[]>(`${this.ehomeUrl}/?title=${term}`)
      .pipe(
        tap(_ => this.log(`found allusers matching "${term}"`)),
        catchError(this.handleError<Users[]>('searchAllUsers', []))
      );
  }

  //searchHomeBuildVersions(term: string): Observable<HomeBuildVersion[]> {
  //  term = term.trim();
  //  // add safe, encoded search parameter if term is present
  //  const options = term ?
  //    { params: new HttpParams().set('name', term) } : {};

  //  return this.http.get<HomeBuildVersion[]>(this.ehomeUrl, options).pipe(
  //    catchError(this.handleError)
  //  );
  //}

  //////// Save methods //////////

  /** POST: add a new users to the server */
  addUsers(title: string): Observable<Users> {
    return this.http.post<Users>(this.ehomeUrl, title, httpOptions)
      .pipe(
        tap((newUsers: Users) =>
          this.log(`added users w/ ID = ${newUsers.UserID}`)),
        catchError(this.handleError<Users>('addUsers'))
      );
  }

  /** DELETE: delete the users from the server */
  deleteUsers(users: Users | number): Observable<Users> {
    const id = typeof users === 'number' ? users : users.UserID;
    const url = `${this.ehomeUrl}/${id}`;

    return this.http.delete<Users>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted users ID = ${id}`)),
        catchError(this.handleError<Users>('deleteUsers'))
      );
  }

  /** PUT: update the users on the server */
  updateUsers(users: Users): Observable<any> {
    return this.http.put(this.ehomeUrl, users, httpOptions)
      .pipe(
        tap(_ => this.log(`updated users ID = ${users.UserID}`)),
        catchError(this.handleError<any>('updateUsers'))
      );
  }
  /****-------------------- Users entity CRUD implementation: End --------------------****/


  /****-------------------- UsersProfile entity CRUD implementation: Start --------------------****/
  /** GET allusersprofile from the server */
  getAllUsersProfile(): Observable<UsersProfile[]> {
    return this.http.get<UsersProfile[]>(this.ehomeUrl)
      .pipe(
        tap(_ => this.log('fetched allusersprofile')),
        catchError(this.handleError('getAllUsersProfile', []))
      );
  }

  /** GET usersprofile by id will 404 if id not found */
  getUsersProfile(id: number): Observable<UsersProfile> {
    const url = `${this.ehomeUrl}/${id}`;
    return this.http.get<UsersProfile>(url)
      .pipe(
        tap(_ => this.log(`fetched usersprofile ID = ${id}`)),
        catchError(this.handleError<UsersProfile>(`getUsersProfile ID = ${id}`))
      );
  }

  /** GET allusersprofile whose title contains search term */
  searchAllUsersProfile(term: string): Observable<UsersProfile[]> {
    if (!term.trim()) {
      // if not search term, return empty usersprofile array.
      return of([]);
    }
    return this.http.get<UsersProfile[]>(`${this.ehomeUrl}/?title=${term}`)
      .pipe(
        tap(_ => this.log(`found allusersprofile matching "${term}"`)),
        catchError(this.handleError<UsersProfile[]>('searchAllUsersProfile', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new usersprofile to the server */
  addUsersProfile(title: string): Observable<UsersProfile> {
    return this.http.post<UsersProfile>(this.ehomeUrl, title, httpOptions)
      .pipe(
        tap((newUsersProfile: UsersProfile) =>
          this.log(`added usersprofile w/ ID = ${newUsersProfile.UsersProfileID}`)),
        catchError(this.handleError<UsersProfile>('addUsersProfile'))
      );
  }

  /** DELETE: delete the usersprofile from the server */
  deleteUsersProfile(usersprofile: UsersProfile | number): Observable<UsersProfile> {
    const id = typeof usersprofile === 'number' ? usersprofile : usersprofile.UsersProfileID;
    const url = `${this.ehomeUrl}/${id}`;

    return this.http.delete<UsersProfile>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted usersprofile ID = ${id}`)),
        catchError(this.handleError<UsersProfile>('deleteUsersProfile'))
      );
  }

  /** PUT: update the usersprofile on the server */
  updateUsersProfile(usersprofile: UsersProfile): Observable<any> {
    return this.http.put(this.ehomeUrl, usersprofile, httpOptions)
      .pipe(
        tap(_ => this.log(`updated usersprofile ID = ${usersprofile.UsersProfileID}`)),
        catchError(this.handleError<any>('updateUsersProfile'))
      );
  }
  /****-------------------- UsersProfile entity CRUD implementation: End --------------------****/


  /****-------------------- Handle errors private method implementation --------------------****/
  //private handleError(error: any) {
  //  // In a real world app, we might send the error to remote logging infrastructure
  //  // and reformat for user consumption
  //  console.error(error); // log to console instead
  //  return throwError(error);
  //}

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HttpClientAppService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HttpClientAppService: ${message}`);
  }

}
