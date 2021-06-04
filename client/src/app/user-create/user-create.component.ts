
import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {User} from '../shared/interfaces';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  users: User[] = [];
  userName = '';
  userLastName = '';
  userMail = '';
  userPass = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  send() {
    if (!this.userMail.trim()) {
      return
    }
    const newUser: User = {
      email: this.userMail,
      password: this.userPass,
      name: this.userName,
      lastName: this.userLastName
    }
    this.http.post<User>('http://localhost:8080/user', newUser)
        .subscribe(user => {
          console.log(user);
          this.users.push(user);
          this.userMail = '';
          this.userPass = '';
          this.userName = '';
          this.userLastName = '';
        })
  }
}
