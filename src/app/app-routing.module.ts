import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {ListprojetComponent} from "./Components/listprojet/listprojet.component";
import {ListTasksComponent} from "./Components/list-tasks/list-tasks.component";
import {HomeUserComponent} from "./Components/home-user/home-user.component";
import {ListProjetUserComponent} from "./Components/list-projet-user/list-projet-user.component";
import {ListTaskParProjetComponent} from "./Components/list-task-par-projet/list-task-par-projet.component";
import {ListAllTasksUserComponent} from "./Components/list-all-tasks-user/list-all-tasks-user.component";


const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'homeAdmin', component:HomeComponent,children:[
      {path:'listProjet',component:ListprojetComponent},
      {path:'listTasks',component:ListTasksComponent},

    ]},
  { path: 'homeUser', component:HomeUserComponent,children:[
      {path:'listProjetUser',component:ListProjetUserComponent},
      {path:'listTasksParProject/:id',component:ListTaskParProjetComponent},
      {path:'listAllTasks',component:ListAllTasksUserComponent},


    ]},




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
