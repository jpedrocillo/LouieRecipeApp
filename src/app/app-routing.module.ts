import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeHomeComponent } from './recipe/recipe-home/recipe-home.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';


const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {path: 'recipes', component: RecipeComponent,
    children: [
      { path: '', component: RecipeHomeComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':recipe_id/view', component: RecipeDetailComponent },
      { path: ':recipe_id/edit', component: RecipeEditComponent },
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
