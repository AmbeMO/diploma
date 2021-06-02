import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../../interfaces';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-receipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit , OnDestroy {

  recipes: Recipe[] = [];
  pSub: Subscription

  searchStr = '';


  // constructor( private http: HttpClient) { }

  // ngOnInit() {
  //   this.http.get<Recipe[]>(`http://localhost:8080/recipe`)
  //       .subscribe(recipes => {
  //         console.log(' 1 response', recipes)
  //         this.recipes = recipes
  //       })
  //
  // }

constructor(private recipeService: RecipeService) {
}

    ngOnInit() {
    this.pSub = this.recipeService.getAll().subscribe(recipes => {
        this.recipes = recipes
    })
}

    ngOnDestroy() {
        if (this.pSub) {
            this.pSub.unsubscribe()
        }
    }

    // @Input() recipe: Recipe





}
