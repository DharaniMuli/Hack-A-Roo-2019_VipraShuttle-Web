import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AddOrganizationComponent} from './SuperAdmin/add-organization/add-organization.component';
import {AddOrganizationAdminComponent} from './SuperAdmin/add-organization-admin/add-organization-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'addorganization', component: AddOrganizationComponent},
  { path: 'addorganizationadmincomponent', component: AddOrganizationAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
