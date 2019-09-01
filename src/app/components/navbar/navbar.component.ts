import { Component, OnInit, Inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { User } from 'src/app/models/User';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import * as jwt_decode from "jwt-decode";
import Utils from '../../utils/Utils';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {

  user: User  = {
    username: '',
    password: '',
    role: ''
  };

  isLogedIn: boolean;

  constructor(private route:Router, private authService:AuthService) { }

  ngOnInit() {
    this.isLogedIn = localStorage.getItem('token')!=null ? true : false;
    this.user.username= localStorage.getItem('username') != null ?localStorage.getItem('username') : '' ;
    this.user.role = this.authService.getCurrentUserRole();
  }

  login() {
    this.authService.loginRequest(this.user).subscribe((
      response: HttpResponse<any>) => {
      localStorage.setItem('username', this.user.username);
      this.isLogedIn = true;
      this.user.role = this.authService.getCurrentUserRole();
      location.reload();
    });


  }

  logout() {
    this.user = {
      username: '',
      password: '',
      role: ''
    };
    this.authService.logout();
    location.reload();
  }



}
