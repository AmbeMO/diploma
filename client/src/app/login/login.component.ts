import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Recipe, User} from '../shared/interfaces';
import {AuthService} from '../shared/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  message: string;


  constructor(
      private auth: AuthService,
      private router: Router,
      private route: ActivatedRoute,
      private http: HttpClient
  ) { }

  ngOnInit() {
      // const options = new RequestOptions({ headers: headers, withCredentials: true });
      console.log('start');
      // this.route.queryParams.subscribe( (params: Params) => {
      //     if (params['loginAgain']) {
      //         this.message = 'Please write data';
      //     } else if (params['authFailed']) {
      //         this.message = 'Session end. Enter data again';
      //     }
      // })
      this.form = new FormGroup({
      email: new FormControl(null, [
          Validators.required,
          Validators.email
      ]),
      password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6)
      ])
    });
  }
  send() {
      console.log('submitted');
      if ( this.form.invalid) {
          return;
      }
      // this.submitted = true;
      const user: User = {
          email: this.form.value.email,
          password: this.form.value.password
      };
      console.log('user', user);

      this.login(user)
        .subscribe(result => {
          console.log(result);
          this.router.navigate(['cabinet']);
      });
      //
      // this.auth.login(user).subscribe(() => {
      //     this.form.reset();
      //     this.router.navigate(['dashboard']);
      //     this.submitted = false;
      // }, () => {
      //     this.submitted = false;
      // });
  }

    login(user: User): Observable<User> {
        const requestOptions = {
            headers: new HttpHeaders({
                Authorization: 'my-request-token'
            }),
            withCredentials: true
        };

        return this.http.post<User>('http://localhost:8080/auth/login', user);

    }

}
