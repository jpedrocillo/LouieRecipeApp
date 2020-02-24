import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../Models/ingredient.model';
import { ShoppingListService } from '../Services/shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.ingredientForm.subscribe((ingredients: IngredientModel[]) => {
        this.ingredients = ingredients;
    });
  }


}
