import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Category } from 'src/app/models/Category';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  isAdmin:boolean=false;
  category: Category = {
    name:'',
    description:''
  };

  constructor(private router: Router, private categoryService:CategoryService,private authService:AuthService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    //init of the session
    let role = this.authService.getCurrentUserRole() ;
    this.isAdmin = role == 'admin' ? true : false ;

    //geting the route param id
    const queryParams = this.activeRoute.snapshot.queryParams
    const routeParams = this.activeRoute.snapshot.params;
     // do something with the parameters
     let idCat = routeParams.id;
     this.categoryService.getCategorieById(idCat).subscribe(cat=>{
       this.category=cat;
     });
  }


  updateCategory(category:Category){
    if (confirm('Are you sure you want to update this category' ))
    this.categoryService.editCategory(category).subscribe(()=>
      alert('category updated !!'));
    this.router.navigate(['categories/admin']); 
      

  }

}
