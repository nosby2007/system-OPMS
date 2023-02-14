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
    RegistrationSudComponent
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
