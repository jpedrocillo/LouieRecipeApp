import { IngredientModel } from './ingredient.model';

export class RecipeModel {
  name: string;
  amount: number;
  imagePath: string;
  description: string;
  ingredients: IngredientModel[];

  constructor(name: string , amount: number, description: string, imagePath: string, ingredients: IngredientModel[]) {
    this.name = name;
    this.amount = amount;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }

}
