import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'A test Recipe', 
            'this is simply a test', 
            'https://www.eatforhealth.gov.au/sites/default/files/images/Recipes/original_lasagna_recipe_image.jpg', 
            [
                new Ingredient('Meat', 1),
                new Ingredient('Tomato', 5)
            ]
        ),
        new Recipe(
            'A test2 Recipe', 
            'this is simply a test2', 
            'https://www.eatforhealth.gov.au/sites/default/files/images/Recipes/original_lasagna_recipe_image.jpg', 
            [
                new Ingredient('toto', 2),
                new Ingredient('titi', 3)
            ]
        )
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}