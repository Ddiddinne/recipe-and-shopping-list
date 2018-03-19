import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Orange', 10)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredients: Ingredient[]){
        for(let ingredient of ingredients){
            var found = false;
            for(var i = 0; i < this.ingredients.length; i++) {
                if (this.ingredients[i].name == ingredient.name) {
                this.ingredients[i].amount = Number(this.ingredients[i].amount) + Number(ingredient.amount);
                //this.ingredientsChanged.emit(this.ingredients.slice());
                found = true;
                break;
                }
            }
            if(!found){
            this.ingredients.push(ingredient);
            
            }
        }
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}