import { Injectable, EventEmitter } from '@angular/core';
import {IngredientModel} from '../Models/ingredient.model';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class ShoppingListService {
  private ingredients: IngredientModel[] = [
    new IngredientModel('Onion', 5),
    new IngredientModel('Garlic', 10),
    new IngredientModel('Lemon', 5 )
  ];

  ingredientForm = new EventEmitter<IngredientModel[]>();

  constructor() {
   }

   getIngredients() {
     return this.ingredients.slice();
   }

   onAddShoppingList(ingredient: IngredientModel) {
      this.ingredients.push(ingredient);
      this.ingredientForm.emit(this.ingredients.slice());
   }

   onAddRecipeIngredientToShoppingList(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
    this.ingredientForm.emit(this.ingredients.slice());
   }

}
