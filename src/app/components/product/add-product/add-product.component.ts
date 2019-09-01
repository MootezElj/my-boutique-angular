import { Component, OnInit, Inject } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { User } from 'src/app/models/User';
import Utils from 'src/app/utils/Utils';
import { Product } from 'src/app/models/Product';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  isAdmin:boolean=false;
  product:Product;


  
  constructor(private authService:AuthService) { }

  ngOnInit() {
    let role = this.authService.getCurrentUserRole() ;
      this.isAdmin = role == 'admin' ? true : false ;
      this.product ={
        
      };
  }
  


}
