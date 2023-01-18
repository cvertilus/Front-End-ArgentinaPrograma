import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/header/login/login.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';

const routes: Routes = [
  {path:"loginModal",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
