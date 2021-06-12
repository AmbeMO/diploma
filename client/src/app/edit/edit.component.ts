import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../shared/interfaces';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../shared/recipe.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  // form: FormGroup;
  // recipes: Recipe[] = [];
  // pSub: Subscription;
  // title = '';
  // description = '';
  // howToCook = '';
  // ingridients = '';
  // constructor(private recipeService: RecipeService,
  //             private route: ActivatedRoute,
  // ) {
  // }
  // ngOnInit() {
  //   this.pSub = this.recipeService.getAll().subscribe(recipes => {
  //     this.recipes = recipes;
  //   });
  //   // this.route.params
  //   //     .pipe( switchMap((params: Params) => {
  //   //       return this.recipeService.getById(params['id']);
  //   //     })
  //   //     ).subscribe((recipe: Recipe) => {
  //   //       this.form = new FormGroup( {
  //   //         title: new FormControl(recipe.title, Validators.required),
  //   //       })
  //   //
  //   // })
  // }
  //
  // completeRecipe(id: number) {
  //   if (!this.title.trim() && !this.description.trim() && !this.howToCook.trim()) {
  //     return;
  //   }
  //   const newRecipe: Recipe = {
  //     title: this.title,
  //     description: this.description,
  //     howToCook: this.howToCook,
  //     ingridients: this.ingridients
  //   }
  //
  //   this.recipeService.completeRecipe(id).subscribe(recipe => {
  //     console.log(recipe);
  //
  //   })
  // }
}
