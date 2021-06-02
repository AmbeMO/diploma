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
                        ...response[key]
                    }))
            }))

       }

    getById(id: string): Observable<Recipe> {
        return this.http.get(`http://localhost:8080/recipe/${id}`)
            .pipe(map((recipe: Recipe) => {
                console.log(recipe)
                return {
                    ...recipe[0], id
                }
            }))
    }

    // getById(id: string): Observable<Post> {
    //     return this.http.get<Post>(`${environment.fbDbUrl}/posts/${id}.json`)
    //         .pipe(map((post: Post) => {
    //             return {
    //                 ...post, id,
    //                 date: new Date(post.date)
    //             }
    //         }))
    // }
}
