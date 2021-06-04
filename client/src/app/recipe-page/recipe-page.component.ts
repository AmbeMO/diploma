import { Component, OnInit } from '@angular/core';
import {RecipeComponent} from '../shared/components/recipe/recipe.component';
import {Recipe} from '../shared/interfaces';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../shared/recipe.service';
import {log} from 'util';
import {SafePipe} from '../shared/safePipe.service';
import {SafeUrl} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-receipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {
    myUrl = 'https://www.youtube.com/embed/_S7WEVLbQ-Y';

    TrustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.myUrl);

    recipe$: Observable<Recipe>;

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService,
        private sanitizer: DomSanitizer
    ) {
    }

    ngOnInit() {
        console.log('1');
        this.recipe$ = this.route.params
            .pipe(switchMap((params: Params) => {
                console.log('3');
                return this.recipeService.getById(params.id);

            }));
        console.log('2');

    }

    cleanURL(oldURL ): SafeUrl {
        return   this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
    }

    // cleanURL(oldURL): SafeUrl {
    //     return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
    //
    // }
}
