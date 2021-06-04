import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SafePipe} from './shared/safePipe.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { RecipeComponent } from './shared/components/recipe/recipe.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


import {SearchPipe} from './shared/search.pipe';







@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    RecipePageComponent,
    RecipeComponent,
    SearchPipe,
    UserCreateComponent,
    CabinetComponent,
    SafePipe
    // CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    // DomSanitizer
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
