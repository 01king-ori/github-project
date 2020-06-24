import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {Repository} from '../classes/repositories';
import {User} from '../classes/users';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  repository: Repository;
  users: User;
  newRepository: any;
  searchRepo: any;

  constructor(private http: HttpClient) {
      this.repository = new Repository('', '', '', new Date());
      this.users = new User('', '', '', 0, '', new Date(), 0, 0);
  }

  githubUser(searchName) {
      interface ApiResponse {
          name: string;
          html_url: string;
          description: string;
          created_at: Date;
          login: string;
          public_repos: number;
          followers: number;
          following: number;
          avatar_url: string;
      }

      const promise = new Promise((resolve) => {
// tslint:disable-next-line: max-line-length
          this.http.get<ApiResponse>('https://api.github.com/users/' + searchName + '?access_token=' + environment.myApi).toPromise().then(getResponse => {
              this.users.name = getResponse.name;
              this.users.html_url = getResponse.html_url;
              this.users.login = getResponse.login;
              this.users.avatar_url = getResponse.avatar_url;
              this.users.public_repos = getResponse.public_repos;
              this.users.created_at = getResponse.created_at;
              this.users.followers = getResponse.followers;
              this.users.following = getResponse.following;
              resolve();
          }, );
      });
      return promise;

  }

  gitUserRepos(searchMe) {
      interface ApiResponse {
          name: string;
          description: string;
          created_at: Date;
      }

      const myPromise = new Promise((resolve, reject) => {
// tslint:disable-next-line: max-line-length
          this.http.get<ApiResponse>('https://api.github.com/users/' + searchMe + '/repos?order=created&sort=asc?access_token=' + environment.myApi).toPromise().then(getRepoResponse => {
              this.newRepository = getRepoResponse;
              resolve();
          }, error => {
              reject(error);
          });
      });
      return myPromise;
  }


  gitRepos(searchName) {
      interface ApiResponse {
          items: any;
      }

      const promise = new Promise((resolve, reject) => {
// tslint:disable-next-line: max-line-length
          this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + searchName + ' &per_page=10 ' + environment.myApi).toPromise().then(getRepoResponse => {
              this.searchRepo = getRepoResponse.items;

              resolve();
          }, error => {
              this.searchRepo = 'error';
              reject(error);
          });
      });
      return promise;
  }
}
