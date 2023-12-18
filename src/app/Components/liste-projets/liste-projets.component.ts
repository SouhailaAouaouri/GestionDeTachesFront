import { Component, OnInit } from '@angular/core';
import {Projet} from "../../Models/projet";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../Services/Security/token-storage.service";

@Component({
  selector: 'app-liste-projets',
  templateUrl: './liste-projets.component.html',
  styleUrls: ['./liste-projets.component.css']
})
export class ListeProjetsComponent implements OnInit {
  //create an array of type Projet to store the list of projets with 2 projects as example
  listProjets :Projet[]=[
    {id:1,titre:"titre1",description:"description1",listeTaches:[],members:[]},
    {id:2,description:"description2",titre:"titre2",listeTaches:[],members:[]},
  ];

  constructor(private tokenStorage:TokenStorageService,
              private router: Router,
  ) { }
  ngOnInit(): void {
  }
  goToDetailsProjet(id: string) {
    this.router.navigate(['homeAdmin/detailsProjet/'+id]);

  }
}
