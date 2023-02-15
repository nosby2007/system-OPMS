import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRegistrationAdamaouaComponent } from './create-registration-adamaoua/create-registration-adamaoua.component';
import { CreateRegistrationCentreComponent } from './create-registration-centre/create-registration-centre.component';
import { CreateRegistrationEstComponent } from './create-registration-est/create-registration-est.component';
import { CreateRegistrationExtremenordComponent } from './create-registration-extremenord/create-registration-extremenord.component';
import { CreateRegistrationNationalComponent } from './create-registration-national/create-registration-national.component';
import { CreateRegistrationNordComponent } from './create-registration-nord/create-registration-nord.component';
import { CreateRegistrationNordouestComponent } from './create-registration-nordouest/create-registration-nordouest.component';
import { CreateRegistrationOuestComponent } from './create-registration-ouest/create-registration-ouest.component';
import { CreateRegistrationSudComponent } from './create-registration-sud/create-registration-sud.component';
import { CreateRegistrationSudouestComponent } from './create-registration-sudouest/create-registration-sudouest.component';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';
import { RegistrationAdamouaComponent } from './registration-adamoua/registration-adamoua.component';
import { RegistrationCentreComponent } from './registration-centre/registration-centre.component';
import { RegistrationEstComponent } from './registration-est/registration-est.component';
import { RegistrationExtremenordComponent } from './registration-extremenord/registration-extremenord.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { RegistrationNationalComponent } from './registration-national/registration-national.component';
import { RegistrationNordouestComponent } from './registration-nordouest/registration-nordouest.component';
import { RegistrationOuestComponent } from './registration-ouest/registration-ouest.component';
import { RegistrationSudComponent } from './registration-sud/registration-sud.component';
import { RegistrationSudouestComponent } from './registration-sudouest/registration-sudouest.component';
import { UserDetailAdamouaComponent } from './user-detail-adamoua/user-detail-adamoua.component';
import { UserDetailCentreComponent } from './user-detail-centre/user-detail-centre.component';
import { UserDetailEstComponent } from './user-detail-est/user-detail-est.component';
import { UserDetailExtremenordComponent } from './user-detail-extremenord/user-detail-extremenord.component';
import { UserDetailNationalComponent } from './user-detail-national/user-detail-national.component';
import { UserDetailNordouestComponent } from './user-detail-nordouest/user-detail-nordouest.component';
import { UserDetailOuestComponent } from './user-detail-ouest/user-detail-ouest.component';
import { UserDetailSudComponent } from './user-detail-sud/user-detail-sud.component';
import { UserDetailSudouestComponent } from './user-detail-sudouest/user-detail-sudouest.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'register', pathMatch:'full'},
  {path:'register', component:CreateRegistrationComponent},
  {path:'registercentre', component:CreateRegistrationCentreComponent},
  {path:'registerouest', component:CreateRegistrationOuestComponent},
  {path:'registersud', component:CreateRegistrationSudComponent},
  {path:'registerest', component:CreateRegistrationEstComponent},
  {path:'registeradamaoua', component:CreateRegistrationAdamaouaComponent},
  {path:'registerextremenord', component:CreateRegistrationExtremenordComponent},
  {path:'registernord', component:CreateRegistrationAdamaouaComponent},
  {path:'registersudouest', component:CreateRegistrationSudouestComponent},
  {path:'registernordouest', component:CreateRegistrationNordouestComponent},
  {path:'registernational', component:CreateRegistrationNationalComponent},
  {path:'list', component:RegistrationListComponent},
  {path:'listCentre', component:RegistrationCentreComponent},
  {path:'listOuest', component:RegistrationOuestComponent},
  {path:'listSud', component:RegistrationSudComponent},
  {path:'listEst', component:RegistrationEstComponent},
  {path:'listAdamaoua', component:RegistrationAdamouaComponent},
  {path:'listNord', component:RegistrationAdamouaComponent},
  {path:'listExtremenord', component:RegistrationExtremenordComponent},
  {path:'listSudouest', component:RegistrationSudouestComponent},
  {path:'listNordouest', component:RegistrationNordouestComponent},
  {path:'listNational', component:RegistrationNationalComponent},
  {path:'listNordouest', component:RegistrationNordouestComponent},
  {path:'detail/:id', component:UserDetailComponent},
  {path:'detailcentre/:id', component:UserDetailCentreComponent},
  {path:'detailouest/:id', component:UserDetailOuestComponent},
  {path:'detailsud/:id', component:UserDetailSudComponent},
  {path:'detailest/:id', component:UserDetailEstComponent},
  {path:'detailadamaoua/:id', component:UserDetailAdamouaComponent},
  {path:'detailnord/:id', component:UserDetailAdamouaComponent},
  {path:'detailextremenord/:id', component:UserDetailExtremenordComponent},
  {path:'detailsudouest/:id', component:UserDetailSudouestComponent},
  {path:'detailnordouest/:id', component:UserDetailNordouestComponent},
  {path:'detailnatikonal/:id', component:UserDetailNationalComponent},
  {path:'update/:id', component:CreateRegistrationComponent},
  {path:'updatecentre/:id', component:CreateRegistrationCentreComponent},
  {path:'updateouest/:id', component:CreateRegistrationOuestComponent},
  {path:'updatesud/:id', component:CreateRegistrationSudComponent},
  {path:'updateest/:id', component:CreateRegistrationEstComponent},
  {path:'updateadamaoua/:id', component:CreateRegistrationAdamaouaComponent},
  {path:'updatenord/:id', component:CreateRegistrationNordComponent},
  {path:'updateextremenord/:id', component:CreateRegistrationExtremenordComponent},
  {path:'updatesudouest/:id', component:CreateRegistrationSudouestComponent},
  {path:'updatenordouest/:id', component:CreateRegistrationNordouestComponent},
  {path:'updatenational/:id', component:CreateRegistrationNationalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
