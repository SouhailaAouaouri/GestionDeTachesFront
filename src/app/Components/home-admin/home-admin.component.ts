import { Component, OnInit } from '@angular/core';
import {User} from "../../Models/user";
import {TokenStorageService} from "../../Services/Security/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  admin = new User();
  Role: any;

  constructor(private tokenStorage:TokenStorageService,
              private router: Router,
  ) { }

  ngOnInit(): void {
  }


  logOut() {
    this.tokenStorage.signOut();
    this.router.navigate(['']);

  }
}
