import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { CategoryService } from './services/category.service';
import { TokenInterceptor } from './auth/token.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesListComponent } from './components/category/categories-list/categories-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CategoriesListAdminComponent } from './components/category/categories-list-admin/categories-list-admin.component';
import { HomeComponent } from './components/home/home.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddProductComponent,
    AddCategoryComponent,
    FooterComponent,
    CategoriesListComponent,
    NotFoundComponent,
    CategoriesListAdminComponent,
    HomeComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
	  StorageServiceModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ,CategoryService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
