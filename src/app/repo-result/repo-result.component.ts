import { User } from '../classes/users';
import { Repository } from '../classes/repositories';
import { SearchService } from '../services/search-git.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo-result.component.html',
  providers: [SearchService],
  styleUrls: ['./repo-result.component.css']
})
export class RepositoryComponent implements OnInit {
  repository: Repository;
  public searchRepo: string;
  public resultCount = 12;

  searchRepos() {
      this.searchRepo = '01king-ori';
      this.resultCount = 10;
      this.getDataFunction();

  }

  constructor(public gitRepoRequest: SearchService ) { }

ngOnInit() {
      this.resultCount = 5;
    this.gitRepoRequest.gitRepos(this.searchRepo);
}


    getDataFunction() {
        this.gitRepoRequest.gitRepos(this.searchRepo);

    }


}

