import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { IngredientModel } from 'src/app/Models/ingredient.model';
import { ShoppingListService } from 'src/app/Services/shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientName', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;



  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingrName= this.nameInputRef.nativeElement.value;
    const ingrAmount= this.amountInputRef.nativeElement.value;
    const newIngredient = new IngredientModel(ingrName, ingrAmount);
    this.shoppingListService.onAddShoppingList(newIngredient);
    //this.shoppingListService.ingredientForm.emit(newIngredient)
  }

  onDeleteItem() {

  }

  onResetItem() {

  }


}
