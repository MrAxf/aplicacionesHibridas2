import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Repo } from '../../models/repo';

/*
  Generated class for the ReposProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReposProvider {

  constructor(public http: HttpClient) { }

  getRepos(username: String): Observable<Repo[]>{
    return this.http.get<Repo[]>(`https://api.github.com/users/${username}/repos`);
  }

}
