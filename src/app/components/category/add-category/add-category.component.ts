import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { User } from 'src/app/models/User';
import Utils from 'src/app/utils/Utils';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})



export class AddCategoryComponent implements OnInit {
  
  isAdmin:boolean=false;

  category: Category;

  constructor(private categoryService:CategoryService,private authService:AuthService) { }
  


  ngOnInit() {
      let role = this.authService.getCurrentUserRole() ;
      this.isAdmin = role == 'admin' ? true : false ;
      this.category ={
        name: '',
        description: ''
      };
  }

    addCategory(){
      if (confirm('Are you sure you want to add this category' ))
      this.categoryService.addCategory(this.category).subscribe(resp=>{
          console.log('added Category '+this.category);
          this.category ={
            name: '',
            description: ''
          };
        });
    }


}
