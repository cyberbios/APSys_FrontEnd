import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ModalityComponent } from './modality/modality.component';
import { ProfileComponent } from './profile/profile.component';
import { PlanComponent } from './plan/plan.component';
import { PayTypeComponent } from './pay-type/pay-type.component';
import { ClassAgendaComponent } from './class-agenda/class-agenda.component';
import { UserAgendaComponent } from './user-agenda/user-agenda.component';
import { ContractComponent } from './contract/contract.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UserComponent,
    TeacherComponent,
    ModalityComponent,
    ProfileComponent,
    PlanComponent,
    PayTypeComponent,
    ClassAgendaComponent,
    UserAgendaComponent,
    ContractComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
