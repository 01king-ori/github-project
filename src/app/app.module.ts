import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchResultComponent } from '../app/components/search-result/search-result.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { DaysAgoPipe } from './pipes/days-ago.pipe';
import { RepoResultComponent } from './components/repo-result/repo-result.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    SearchResultComponent,
    PageNotFoundComponent,
    MyProfileComponent,
    DaysAgoPipe,
    RepoResultComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
    HttpClientModule,
   
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }