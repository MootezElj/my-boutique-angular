import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { CategoriesListComponent } from './components/category/categories-list/categories-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CategoriesListAdminComponent } from './components/category/categories-list-admin/categories-list-admin.component';
import { HomeComponent } from './components/home/home.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';

const routes: Routes = [

  {path:"products/add",component:AddProductComponent, pathMatch:'full'},
  {path:"",component:HomeComponent},
  {path:"categories",  component:CategoriesListComponent},
  {path:"categories/admin",  component:CategoriesListAdminComponent},
  {path:"categories/edit/:id",  component:EditCategoryComponent},
  {path:"categories/add",component:AddCategoryComponent},
  {path:"**",component:NotFoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
