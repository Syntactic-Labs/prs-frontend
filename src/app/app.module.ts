import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MenuitemComponent } from './menu/menuitem/menuitem.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { HomeComponent } from './homehelpabout/home/home.component';
import { HelpComponent } from './homehelpabout/help/help.component';
import { AboutComponent } from './homehelpabout/about/about.component';
import { E404Component } from './homehelpabout/e404/e404.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuitemComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserLoginComponent,
    HomeComponent,
    HelpComponent,
    AboutComponent,
    E404Component
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
