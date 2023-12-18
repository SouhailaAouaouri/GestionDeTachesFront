import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { SiteWebComponent } from './Components/site-web/site-web.component';
import { HomeAdminComponent } from './Components/home-admin/home-admin.component';
import { HomeUserComponent } from './Components/home-user/home-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthInspecterService} from "./Services/Security/Helper/auth-inspecter.service";
import { DashboardAdminComponent } from './Components/dashboard-admin/dashboard-admin.component';
import { ListeProjetsComponent } from './Components/liste-projets/liste-projets.component';
import { DetailsProjetComponent } from './Components/details-projet/details-projet.component';
import { TaskDetailsAdminComponent } from './Components/task-details-admin/task-details-admin.component';
import {MatDialogModule} from "@angular/material/dialog";
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SiteWebComponent,
    HomeAdminComponent,
    HomeUserComponent,
    DashboardAdminComponent,
    ListeProjetsComponent,
    DetailsProjetComponent,
    TaskDetailsAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    DragDropModule,
  ],
  providers: [AuthInspecterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
