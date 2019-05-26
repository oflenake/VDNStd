import { HomeBuildVersion } from '../entities/homebuildversion';
import { Users } from '../entities/users';
import { UsersProfile } from '../entities/usersprofile';
import { Observable } from 'rxjs';

export abstract class AppService {
  //ehomeUrl = 'api/ehome';  // URL to web api
  ehomeUrl = 'http://ehome/api/';

  // HomeBuildVersion entity CRUD definition
  abstract getHomeBuildVersions(): Observable<HomeBuildVersion[]>;
  abstract getHomeBuildVersion(SystemInformationID: number): Observable<HomeBuildVersion>;
  abstract addHomeBuildVersion(Title: string): Observable<HomeBuildVersion>;
  abstract deleteHomeBuildVersion(homebuildversion: HomeBuildVersion | number): Observable<HomeBuildVersion>;
  abstract searchHomeBuildVersions(term: string): Observable<HomeBuildVersion[]>;
  abstract updateHomeBuildVersion(homebuildversion: HomeBuildVersion): Observable<HomeBuildVersion>;

  // Users entity CRUD definition
  abstract getAllUsers(): Observable<Users[]>;
  abstract getUsers(UserID: number): Observable<Users>;
  abstract addUsers(UserName: string): Observable<Users>;
  abstract deleteUsers(users: Users | number): Observable<Users>;
  abstract searchAllUsers(term: string): Observable<Users[]>;
  abstract updateUsers(users: Users): Observable<Users>;

  // UsersProfile entity CRUD definition
  abstract getAllUsersProfile(): Observable<UsersProfile[]>;
  abstract getUsersProfile(UsersProfileID: number): Observable<UsersProfile>;
  abstract addUsersProfile(usersprofile: UsersProfile | string): Observable<UsersProfile>;
  abstract deleteUsersProfile(usersprofile: UsersProfile | number): Observable<UsersProfile>;
  abstract searchAllUsersProfile(term: string): Observable<UsersProfile[]>;
  abstract updateUsersProfile(usersprofile: UsersProfile): Observable<UsersProfile>;
}
