import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from '../src/app/app.component';
import { HomeComponent } from '../src/app/home/home.component';
import {UserComponent} from '../src/app/my-profile/my-profile.component';
import {RepositoryComponent} from '../src/app/repo-result/repo-result.component';
// Defining routes
const routes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'repository', component: RepositoryComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
