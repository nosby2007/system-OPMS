import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRegistrationCentreComponent } from './create-registration-centre/create-registration-centre.component';
import { CreateRegistrationOuestComponent } from './create-registration-ouest/create-registration-ouest.component';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';
import { RegistrationCentreComponent } from './registration-centre/registration-centre.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { RegistrationOuestComponent } from './registration-ouest/registration-ouest.component';
import { UserDetailCentreComponent } from './user-detail-centre/user-detail-centre.component';
import { UserDetailOuestComponent } from './user-detail-ouest/user-detail-ouest.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'register', pathMatch:'full'},
  {path:'register', component:CreateRegistrationComponent},
  {path:'registercentre', component:CreateRegistrationCentreComponent},
  {path:'registerouest', component:CreateRegistrationOuestComponent},
  {path:'list', component:RegistrationListComponent},
  {path:'listCentre', component:RegistrationCentreComponent},
  {path:'listOuest', component:RegistrationOuestComponent},
  {path:'detail/:id', component:UserDetailComponent},
  {path:'detailcentre/:id', component:UserDetailCentreComponent},
  {path:'detailouest/:id', component:UserDetailOuestComponent},
  {path:'update/:id', component:CreateRegistrationComponent},
  {path:'updatecentre/:id', component:CreateRegistrationCentreComponent},
  {path:'updateouest/:id', component:CreateRegistrationOuestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
