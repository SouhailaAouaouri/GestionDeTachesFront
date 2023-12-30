import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../Services/Security/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tokenService: TokenStorageService,
              private router:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.tokenService.signOut();
    this.tokenService.remove();
    this.router.navigate(['']);

  }

}
