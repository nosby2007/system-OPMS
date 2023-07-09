import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { RegistrationCentreComponent } from './registration-centre/registration-centre.component';
import { CreateRegistrationCentreComponent } from './create-registration-centre/create-registration-centre.component';
import { UserDetailCentreComponent } from './user-detail-centre/user-detail-centre.component';
import { RegistrationOuestComponent } from './registration-ouest/registration-ouest.component';
import { UserDetailOuestComponent } from './user-detail-ouest/user-detail-ouest.component';
import { CreateRegistrationOuestComponent } from './create-registration-ouest/create-registration-ouest.component';
import { CreateRegistrationSudComponent } from './create-registration-sud/create-registration-sud.component';
import { UserDetailSudComponent } from './user-detail-sud/user-detail-sud.component';
import { RegistrationSudComponent } from './registration-sud/registration-sud.component';
import { RegistrationEstComponent } from './registration-est/registration-est.component';
import { UserDetailEstComponent } from './user-detail-est/user-detail-est.component';
import { CreateRegistrationEstComponent } from './create-registration-est/create-registration-est.component';
import { CreateRegistrationAdamaouaComponent } from './create-registration-adamaoua/create-registration-adamaoua.component';
import { UserDetailAdamouaComponent } from './user-detail-adamoua/user-detail-adamoua.component';
import { RegistrationAdamouaComponent } from './registration-adamoua/registration-adamoua.component';
import { RegistrationNordComponent } from './registration-nord/registration-nord.component';
import { UserDetailNordComponent } from './user-detail-nord/user-detail-nord.component';
import { CreateRegistrationNordComponent } from './create-registration-nord/create-registration-nord.component';
import { CreateRegistrationExtremenordComponent } from './create-registration-extremenord/create-registration-extremenord.component';
import { UserDetailExtremenordComponent } from './user-detail-extremenord/user-detail-extremenord.component';
import { RegistrationExtremenordComponent } from './registration-extremenord/registration-extremenord.component';
import { RegistrationSudouestComponent } from './registration-sudouest/registration-sudouest.component';
import { UserDetailSudouestComponent } from './user-detail-sudouest/user-detail-sudouest.component';
import { CreateRegistrationSudouestComponent } from './create-registration-sudouest/create-registration-sudouest.component';
import { CreateRegistrationNordouestComponent } from './create-registration-nordouest/create-registration-nordouest.component';
import { UserDetailNordouestComponent } from './user-detail-nordouest/user-detail-nordouest.component';
import { RegistrationNordouestComponent } from './registration-nordouest/registration-nordouest.component';
import { RegistrationNationalComponent } from './registration-national/registration-national.component';
import { UserDetailNationalComponent } from './user-detail-national/user-detail-national.component';
import { CreateRegistrationNationalComponent } from './create-registration-national/create-registration-national.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    CreateRegistrationComponent,
    RegistrationListComponent,
    RegistrationCentreComponent,
    CreateRegistrationCentreComponent,
    UserDetailCentreComponent,
    RegistrationOuestComponent,
    UserDetailOuestComponent,
    CreateRegistrationOuestComponent,
    CreateRegistrationSudComponent,
    UserDetailSudComponent,
    RegistrationSudComponent,
    RegistrationEstComponent,
    UserDetailEstComponent,
    CreateRegistrationEstComponent,
    CreateRegistrationAdamaouaComponent,
    UserDetailAdamouaComponent,
    RegistrationAdamouaComponent,
    RegistrationNordComponent,
    UserDetailNordComponent,
    CreateRegistrationNordComponent,
    CreateRegistrationExtremenordComponent,
    UserDetailExtremenordComponent,
    RegistrationExtremenordComponent,
    RegistrationSudouestComponent,
    UserDetailSudouestComponent,
    CreateRegistrationSudouestComponent,
    CreateRegistrationNordouestComponent,
    UserDetailNordouestComponent,
    RegistrationNordouestComponent,
    RegistrationNationalComponent,
    UserDetailNationalComponent,
    CreateRegistrationNationalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatBadgeModule,
    MatProgressBarModule,

    NgToastModule,
    NgConfirmModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
