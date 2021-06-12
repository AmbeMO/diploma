import {Pipe, PipeTransform} from '@angular/core';
import {Recipe} from './interfaces';

@Pipe({
    name: 'searchPosts'
})
export class SearchPipe implements PipeTransform {
    transform(recipes: Recipe[], search= ''): Recipe[] {
       if (!search.trim()) {
           return recipes;
       }

       return recipes.filter( recipe => {
              return recipe.title.toLowerCase().includes(search.toLowerCase())
          });
       }
    }

