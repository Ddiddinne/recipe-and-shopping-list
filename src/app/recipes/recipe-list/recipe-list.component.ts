import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'this is simply a test', 'https://www.eatforhealth.gov.au/sites/default/files/images/Recipes/original_lasagna_recipe_image.jpg'),
    new Recipe('A test2 Recipe', 'this is simply a test2', 'https://www.eatforhealth.gov.au/sites/default/files/images/Recipes/original_lasagna_recipe_image.jpg')
  ];

  @Output() recipeSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  onRecipeSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
