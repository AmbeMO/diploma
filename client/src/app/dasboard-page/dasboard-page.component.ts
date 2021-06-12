import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../shared/interfaces';
import {Subscription} from 'rxjs';
import {RecipeService} from '../shared/recipe.service';

@Component({
  selector: 'app-dasboard-page',
  templateUrl: './dasboard-page.component.html',
  styleUrls: ['./dasboard-page.component.scss']
})
export class DasboardPageComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  pSub: Subscription;
  dSub: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.pSub = this.recipeService.getAll().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  remove(id: string) {
    this.dSub = this.recipeService.remove(id).subscribe(() => {
      this.recipes = this.recipes.filter(recipe => recipe.id !== id)
    });
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }

}
