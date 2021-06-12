import { Component, OnInit } from '@angular/core';
import {Advice, Recipe, User} from '../shared/interfaces';
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  advices: Advice[] = [];
  aboutText = '';
  // pSub: Subscription;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Advice[]>(`http://localhost:8080/about`)
          .subscribe(advices => {
            console.log(' 1 response', advices)
            this.advices = advices
          })

  }

  send() {
    if (!this.aboutText.trim()) {
      return
    }
    const newAdvice: Advice = {
      text: this.aboutText,
    }
    this.http.post<Advice>('http://localhost:8080/about', newAdvice)
        .subscribe(advice => {
          console.log(advice);
          this.advices.push(advice);
          this.aboutText = '';
        })
  }
}
