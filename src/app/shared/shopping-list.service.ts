import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Orange', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredients(ingredients: Ingredient[]) {
        for (const ingredient of ingredients) {
            let found = false;
            for (let i = 0; i < this.ingredients.length; i++) {
                if (this.ingredients[i].name === ingredient.name) {
                this.ingredients[i].amount = Number(this.ingredients[i].amount) + Number(ingredient.amount);
                // this.ingredientsChanged.emit(this.ingredients.slice());
                found = true;
                break;
                }
            }
            if (!found) {
                this.ingredients.push(ingredient);
            }
        }
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
