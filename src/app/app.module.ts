import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PetService } from './services/pet.service';
import { InstitutionService } from './services/institution.service'
import { PetComponent } from './components/pet/pet.component';
import { InstitutionComponent } from './components/institution/institution.component'
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { InfoModalComponent } from './shared/modals/infoModal/infoModal.component';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';







export const formatMY = {
  parse: {
    dateInput: 'MM[/]YYYY',
  },
  display: {
    dateInput: 'MM[/]YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'MM[/]YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


const rutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'panel',
    component: DashboardComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    PetComponent,
    InfoModalComponent,
    InstitutionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule
  ],
  providers: [
    PetService,
    InstitutionService,
     {
    provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, direction: 'ltr'}
  },
  {
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  },

  {provide: MAT_DATE_FORMATS, useValue: formatMY},
],
  bootstrap: [AppComponent]
})
export class AppModule { }
