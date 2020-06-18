import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RepoResultComponent } from './components/repo-result/repo-result.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyProfileComponent,
    PageNotFoundComponent,
    RepoResultComponent,
    SearchResultComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
