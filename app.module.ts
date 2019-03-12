import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './app.material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AdminComponent } from './admin/admin.component';
import { OperatorComponent } from './operator/operator.component';
import { LoginService } from './services/app.login.service';
import { PersonService } from './services/app.person.service';
import { AllUsersTableComponent } from './all-users-table/all-users-table.component';
import { UserService } from './services/app.user.service';
import { RequestTableComponent } from './request-table/request-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileComponent,
    UpdatePersonComponent,
    CreatePersonComponent,
    CreateUserComponent,
    AdminComponent,
    OperatorComponent,
    AllUsersTableComponent,
    RequestTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    UserService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
