import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';

import { RecipeComponent } from './shared/components/recipe/recipe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

import {SearchPipe} from './shared/search.pipe';

import { UserCreateComponent } from './user-create/user-create.component';
import { CabinetComponent } from './cabinet/cabinet.component';





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
    // CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
