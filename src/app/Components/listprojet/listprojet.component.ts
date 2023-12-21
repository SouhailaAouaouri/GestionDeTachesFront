import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-listprojet',
  templateUrl: './listprojet.component.html',
  styleUrls: ['./listprojet.component.css']
})
export class ListprojetComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }

  seeProject(id: number) {
    this.router.navigate(['homeAdmin/detailsProject/',id]);


  }
}
