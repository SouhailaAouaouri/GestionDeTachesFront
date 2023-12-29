import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Projet} from "../../Models/projet";
import {ProjectService} from "../../Services/project.service";

@Component({
  selector: 'app-list-projet-user',
  templateUrl: './list-projet-user.component.html',
  styleUrls: ['./list-projet-user.component.css']
})
export class ListProjetUserComponent implements OnInit {

  listProjet : Projet[]=[];
  constructor(private router :Router,
              private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjectList().subscribe(data=>{
      this.listProjet =data as Projet[] ;
    })
  }

  seeTaskProjet(id:number){
    this.router.navigate(['homeUser/listTasksParProject/'+id]);

  }

}
