import { Component, OnInit } from '@angular/core';
import {RecipeComponent} from '../shared/components/recipe/recipe.component';
import {Recipe} from '../shared/interfaces';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../shared/recipe.service';
import {log} from "util";

@Component({
  selector: 'app-receipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {

  recipe$: Observable<Recipe>;

  constructor(
      private route: ActivatedRoute,
      private recipeService: RecipeService

  ) { }

  ngOnInit() {
    console.log('1');
    this.recipe$ = this.route.params
        .pipe(switchMap((params: Params) => {
            console.log('3');
            return this.recipeService.getById(params['id'])

        }))
    console.log('2');
  }

}
