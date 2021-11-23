import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './homehelpabout/about/about.component';
import { E404Component } from './homehelpabout/e404/e404.component';
import { HelpComponent } from './homehelpabout/help/help.component';
import { HomeComponent } from './homehelpabout/home/home.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

const routes: Routes = [
  {path: "", redirectTo: "/users/list", pathMatch: "full"},

  {path: "about", component: AboutComponent},
  {path: "help", component: HelpComponent},
  {path: "home", component: HomeComponent},

  {path: "user/create", component: UserCreateComponent},
  {path: "user/detail:id", component: UserDetailComponent},
  {path: "user/edit:id", component: UserEditComponent},
  {path: "users/list", component: UserListComponent},
  {path: "user/login", component: UserLoginComponent},
  
  {path: "**", component: E404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
