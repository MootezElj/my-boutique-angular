import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-categories-list-admin',
  templateUrl: './categories-list-admin.component.html',
  styleUrls: ['./categories-list-admin.component.css']
})
export class CategoriesListAdminComponent implements OnInit {

  isAdmin: boolean = false;
  categories: Category[] = [{
    description: '',
    name: ''
  }];

  constructor(private categoryService: CategoryService, private authService: AuthService) { }

  ngOnInit() {
    let role = this.authService.getCurrentUserRole();
    this.isAdmin = role == 'admin' ? true : false;
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  deleteCategory(id: number) {
    if (confirm('Are you sure you want to delete this category ?')) {
      this.categoryService.deleteCategory(id).subscribe((response) => {
        console.log("category deleted");
        location.reload();
      });
    }
  }

  goToEditCategory(category: Category) {
    {
    //   category = {
    //     id: 4,
    //     name: 'test',
    //     description: 'test2'
    //   }
    //   this.categoryService.editCategory(category).subscribe((response) => {
    //     console.log(response);

    //   });
    // }
  }}



}
