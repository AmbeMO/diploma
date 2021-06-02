import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User, Recipe} from './interfaces';

@Injectable({providedIn: 'root'})
export class RecipeService {
    // recipes: Recipe[] = [];

    constructor(private http: HttpClient) {
    }
    
    create(recipe: Recipe): Observable<Recipe> {
        return this.http.post<Recipe>('http://localhost:8080/recipe', recipe)
    }
    

       getAll(): Observable<Recipe[]> {
        return this.http.get(`http://localhost:8080/recipe`)
            .pipe(map((response: {[key: string]: any}) => {
                return Object
                    .keys(response)
                    .map(key => ({
                        ...response[key],
                        id: key,
                        // date: new Date(response[key].date)
                    }))
            }))

       }

    getById(id: string): Observable<Recipe> {
        return this.http.get<Recipe>(`http://localhost:8080/recipe/${id}`)
            .pipe(map((recipe: Recipe) => {
                return {
                    ...recipe, id,
                }
            }))
    }
}
