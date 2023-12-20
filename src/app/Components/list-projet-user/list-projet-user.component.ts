import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Projet} from "../../Models/projet";

@Component({
  selector: 'app-list-projet-user',
  templateUrl: './list-projet-user.component.html',
  styleUrls: ['./list-projet-user.component.css']
})
export class ListProjetUserComponent implements OnInit {

  listProjet : Projet []=[];
  constructor(private router :Router) { }

  ngOnInit(): void {
  }

  seeTaskProjet(id:number){
    this.router.navigate(['homeUser/listTasksParProject/'+id]);

  }

}
