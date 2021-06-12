
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/interfaces';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {log} from 'util';
import {AuthService} from '../shared/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  users: User[] = [];
  name = '';
  lastName = '';
  email = '';
  password = '';

  form: FormGroup;

  constructor( private auth: AuthService,
               private router: Router,
               private route: ActivatedRoute,
               private http: HttpClient) { }

  ngOnInit() {
      console.log('start');

      this.form = new FormGroup( {
          name: new FormControl(null, Validators.required),
          lastName: new FormControl(null, Validators.required),
          email: new FormControl(null, [Validators.required, Validators.email]),
          password: new FormControl(null, Validators.required)
          });
  }

  send() {
      console.log('sub');
      if (this.form.invalid) {
      return;
    }
      const newUser: User = {
      email: this.form.value.email,
      password: this.form.value.password,
      name: this.form.value.name,
      lastName: this.form.value.lastName
    };

      console.log('newUser', newUser);
    // UserCreateComponent.html:59 ERROR TypeError: Cannot read property 'subscribe' of undefined
      this.signup(newUser)
          .subscribe(result => { // dont see
              console.log(result.id);
              // this.router.navigate([`cabinet/:id=${result.id}`]); // ***
          });

    // this.http.post<User>('http://localhost:8080/user', newUser)
    //     .subscribe(user => {
    //       console.log(user);
    //       this.users.push(user);
    //       this.email = '';
    //       this.password = '';
    //       this.name = '';
    //       this.lastName = '';
    //     });
  }
    signup(newUser: User): Observable<User>{
        const requestOptions = {
            headers: new HttpHeaders({
                Authorization: 'my-request-token'
            }),
            withCredentials: true
        };

        this.http.post<User>('http://localhost:8080/auth/signup', newUser, requestOptions)
        .subscribe(user => {
                console.log(user);
                console.log(user.id);
                this.users.push(user);
                this.email = '';
                this.password = '';
                this.name = '';
                this.lastName = '';
                this.router.navigate([`cabinet/:id=${user.id}`]);
            });
        return ;

    }


}
