import { Component, OnInit} from '@angular/core';

import { from } from 'rxjs';
import { RecipeService } from '../../Services/recipe.service';
import {RecipeModel} from './../../Models/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipeList();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});

  }

}
