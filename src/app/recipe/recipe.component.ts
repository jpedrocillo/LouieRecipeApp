import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../Models/recipe.model';
import { RecipeService } from '../Services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {
  selectedRecipe: RecipeModel;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe((recipe: RecipeModel) => {
      console.log(recipe);
      this.selectedRecipe = recipe;
    });
  }

}
