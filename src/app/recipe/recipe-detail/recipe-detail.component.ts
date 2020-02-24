import { Component, OnInit } from '@angular/core';

import { RecipeModel } from 'src/app/Models/recipe.model';
import { IngredientModel } from '../../Models/ingredient.model';

import { RecipeService } from '../../Services/recipe.service';
import { ShoppingListService } from '../../Services/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  selectedSingleRecipe: RecipeModel;
  tempId: number;

  constructor(private recipeService: RecipeService, private shoppingService: ShoppingListService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(
        (param: Params ) => {
         this.tempId = param['recipe_id'];
         this.selectedSingleRecipe = this.recipeService.getRecipeById(+this.tempId);
        }
      );


  }

  addRecipeIngredients(ingredients: IngredientModel[]) {
    this.shoppingService.onAddRecipeIngredientToShoppingList(ingredients);
  }

}
