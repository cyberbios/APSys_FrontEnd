import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ModalityComponent } from './modality/modality.component';
import { ProfileComponent } from './profile/profile.component';
import { PlanComponent } from './plan/plan.component';
import { PayTypeComponent } from './pay-type/pay-type.component';
import { ClassAgendaComponent } from './class-agenda/class-agenda.component';
import { UserAgendaComponent } from './user-agenda/user-agenda.component';
import { ContractComponent } from './contract/contract.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/login' ,pathMatch:'full'},
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UserComponent },
    { path: 'teachers', component: TeacherComponent },
    { path: 'modalities', component: ModalityComponent },
    { path: 'profiles', component: ProfileComponent },
    { path: 'plans', component: PlanComponent },
    { path: 'payType', component: PayTypeComponent },
    { path: 'classAgenda', component: ClassAgendaComponent },
    { path: 'userAgenda', component: UserAgendaComponent },
    { path: 'contracts', component: ContractComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
  })
  export class AppRoutingModule{

  }