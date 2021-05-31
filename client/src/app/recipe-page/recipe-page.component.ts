import { Component, OnInit } from '@angular/core';
import {RecipeComponent} from '../shared/components/recipe/recipe.component';
import {Recipe} from '../shared/interfaces';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-receipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {

  }

}
