import { RecipeModel } from '../Models/recipe.model';
import { EventEmitter } from '@angular/core';
import { IngredientModel } from '../Models/ingredient.model';

export class RecipeService {
  private recipeList: RecipeModel[] = [
    // tslint:disable-next-line: max-line-length
    new RecipeModel(
      'Chicken',
       500.00,
       'This is a chicken recipe', 'https://photos.bigoven.com/recipe/hero/brined-roast-chicken-4.jpg?h=300&w=300',
       [
         new IngredientModel('Chicken', 1),
         new IngredientModel('Sauce', 2)
        ]
       ),
    new RecipeModel('Fish',
     250.00,
     'This is a fish recipe',
     'https://photos.bigoven.com/recipe/hero/cornmeal-fried-fish.jpg?h=300&w=300',
     [
      new IngredientModel('Fish', 2),
      new IngredientModel('Sour cream', 1),
      new IngredientModel('Lemon', 1)
     ]
     )];
  constructor() {}

  selectedRecipe = new EventEmitter<RecipeModel>();

  getRecipeList() {
    return this.recipeList.slice();
  }

  getRecipeById(index: number) {
    return this.recipeList[index];
  }

}
