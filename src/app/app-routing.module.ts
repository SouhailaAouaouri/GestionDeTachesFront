import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SiteWebComponent} from "./Components/site-web/site-web.component";
import {LoginComponent} from "./Components/login/login.component";
import {HomeAdminComponent} from "./Components/home-admin/home-admin.component";
import {DashboardAdminComponent} from "./Components/dashboard-admin/dashboard-admin.component";
import {DetailsProjetComponent} from "./Components/details-projet/details-projet.component";
import {HomeUserComponent} from "./Components/home-user/home-user.component";
import {ListeProjetsComponent} from "./Components/liste-projets/liste-projets.component";

const routes: Routes = [
  { path: '', component:SiteWebComponent },
  { path: 'homeAdmin', component:HomeAdminComponent,children:[
      { path: 'listProjets', component:ListeProjetsComponent },
      { path: 'dashAdmin', component:DashboardAdminComponent },
      { path: 'detailsProjet/:id', component:DetailsProjetComponent },

    ]},

  { path: 'homeUser', component:HomeUserComponent },




  { path: 'login', component:LoginComponent , children:[

    ]},



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
