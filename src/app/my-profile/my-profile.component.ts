import { SearchService } from '../services/search-git.service';
import { User } from '../classes/users';
import { Repository } from '../classes/repositories';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './my-profile.component.html',
  providers: [SearchService],
  styleUrls: ['./my-profile.component.css']
})
export class UserComponent implements OnInit {
  public searchMe = '';
  public githubUser: string;

  users: User ;
  repository: Repository;
  public searchRepo: string;
  public resultCount = 12;


  findUser(username) {
      this.githubUser = '';
      this.searchMe  = username;
      this.ngOnInit();
  }


constructor(public githubUserRequest: SearchService, public userRepos: SearchService) { }

ngOnInit() {
    this.githubUserRequest.githubUser(this.searchMe);
    this.users = this.githubUserRequest.users;
    this.userRepos.gitUserRepos(this.searchMe);
    console.log(this.userRepos);
}


  searchRepos() {
      this.searchRepo = '';
      this.resultCount = 10;

  }
}
