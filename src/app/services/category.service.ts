import { Injectable, Inject } from '@angular/core';
import { Category } from '../models/Category';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class CategoryService {
  url = 'https://localhost:9991/api/categories/';
  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }


  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  getCategorieById(id:string): Observable<Category> {
    return this.http.get<Category>(this.url+id+'/');
  }

  addCategory(category: Category) {
    return this.http.post(this.url, category).pipe(map(resp => {
      return resp;
    }));
  }

  editCategory(category: Category): Observable<any> {
    const url = this.url;
    console.log(url);
    return this.http.put(this.url,category);
  }

  deleteCategory(id: number): Observable<any> {
    const url = `${this.url}${id}/`;
    console.log(url);
    return this.http.delete(url)
  }

}
