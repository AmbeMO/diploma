import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {RecipePageComponent} from './recipe-page/recipe-page.component';
import {UserCreateComponent} from './user-create/user-create.component';
import {CabinetComponent} from './cabinet/cabinet.component';
import {AboutComponent} from './about/about.component';
import {AuthService} from './shared/auth.service';
import {SharedModule} from './shared/shared.module';
import {LoginComponent} from './login/login.component';
import {DasboardPageComponent} from './dasboard-page/dasboard-page.component';
import {EditComponent} from './edit/edit.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'login', component:  LoginComponent },
      {path: 'registration', component: UserCreateComponent},
      {path: 'about', component: AboutComponent},
      {path : 'edit/:id', component: EditComponent},
      {path: 'dashboard', component: DasboardPageComponent},
      {path: 'login/cabinet', component: CabinetComponent},
      {path: 'recipe/:id', component: RecipePageComponent}
    ]
  },
  {
    path: 'admin', loadChildren: './admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  }),
      SharedModule
  ],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
