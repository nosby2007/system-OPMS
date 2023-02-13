import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRegistrationCentreComponent } from './create-registration-centre/create-registration-centre.component';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';
import { RegistrationCentreComponent } from './registration-centre/registration-centre.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { UserDetailCentreComponent } from './user-detail-centre/user-detail-centre.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'register', pathMatch:'full'},
  {path:'register', component:CreateRegistrationComponent},
  {path:'registercentre', component:CreateRegistrationCentreComponent},
  {path:'list', component:RegistrationListComponent},
  {path:'listCentre', component:RegistrationCentreComponent},
  {path:'detail/:id', component:UserDetailComponent},
  {path:'detailcentre/:id', component:UserDetailCentreComponent},
  {path:'update/:id', component:CreateRegistrationComponent},
  {path:'updatecentre/:id', component:CreateRegistrationCentreComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
