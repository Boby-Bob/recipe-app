import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  recipes: any[] = [];
  constructor(
    private httpClient: HttpClient
  ) {}
}

getAllRecipe(){
  this.httpClient.get(environments.apiUrl+"recipes").subscribe(
    (recipe) => {
      console.log(recipe)
    },
    (error) => {
      console.log(error);
    }
  )
}