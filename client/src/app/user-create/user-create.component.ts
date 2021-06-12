
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/interfaces';
import {HttpClient} from "@angular/common/http";
import {log} from "util";


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

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.form = new FormGroup( {
          name: new FormControl(null, Validators.required),
          lastName: new FormControl(null, Validators.required),
          email: new FormControl(null, [Validators.required, Validators.email]),
          password: new FormControl(null, Validators.required)
          });
  }

  send() {
    if (this.form.invalid) {
      return;
    }
    const newUser: User = {
      email: this.form.value.email,
      password: this.form.value.password,
      name: this.form.value.name,
      lastName: this.form.value.lastName
    };
    this.http.post<User>('http://localhost:8080/user', newUser)
        .subscribe(user => {
          console.log(user);
          this.users.push(user);
          this.email = '';
          this.password = '';
          this.name = '';
          this.lastName = '';
        })
  }
}
