import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Search} from '../classes/search';

@Component({
  selector: 'app-search',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchFormComponent implements OnInit {

  searchInfo = new Search('');
  @Output() getName = new EventEmitter<Search>();

  searchFor(data){
      this.getName.emit(data.value.find);
      console.log(data.value.find)
      data.reset();
  }


constructor() { }

ngOnInit() {
}

}
