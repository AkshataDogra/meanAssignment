import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { UpdatePersonComponent } from './update-person/update-person.component';
import { OperatorComponent } from './operator/operator.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'userProfile', component: UserProfileComponent },
  // { path: 'updatePerson', component: UpdatePersonComponent },
  { path: 'operator', component: OperatorComponent},
  { path: 'administrator', component: AdminComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot (routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
