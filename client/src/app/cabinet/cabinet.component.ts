import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../shared/interfaces';
import {RecipeService} from "../shared/recipe.service";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {

  form: FormGroup;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      ingridients: new FormControl(null, Validators.required),
      how_to_cook: new FormControl(null, Validators.required),
      img_link: new FormControl(null, Validators.required),
      video_link: new FormControl(null),
      author_full_name: new FormControl(null, Validators.required),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const recipe: Recipe = {
      title: this.form.value.title,
      description: this.form.value.description,
      ingridients: this.form.value.ingridients,
      howToCook: this.form.value.how_to_cook,
      imgLink: this.form.value.img_link,
      videoLink: this.form.value.video_link,
      authorFullName: this.form.value.author_full_name,
    };

    this.recipeService.create(recipe).subscribe(() => {
      this.form.reset()

    })
  }

}
