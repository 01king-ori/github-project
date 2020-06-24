import { SearchService } from '../app/services/search-git.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RepositoryComponent } from '../app/repo-result/repo-result.component';
import { UserComponent } from '../app/my-profile/my-profile.component';
import { SearchFormComponent } from '../app/search-result/search-result.component';
import { HomeComponent } from '../app/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { DateCountPipe } from '../app/pipes/days-ago.pipe';
import { NavbarComponent } from '../app/toolbar/toolbar.component';
import { RoutingModule } from '../routing.service';


const routes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'repository', component: RepositoryComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    UserComponent,
    SearchFormComponent,
    HomeComponent,
    DateCountPipe,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
