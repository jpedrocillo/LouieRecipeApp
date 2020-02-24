import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  isEditMode = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(
        (param: Params) => {
          const p = param['recipe_id'];
          this.id = +p;
          this.isEditMode = p != null;
          console.log('Is edit mode:' + this.isEditMode);
        } );
  }

}
