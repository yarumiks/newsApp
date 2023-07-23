import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent, children: [
    {path:'news', component: CategoriesComponent},
    {path:'business', component: CategoriesComponent},
    {path:'entertainment', component: CategoriesComponent},
    {path:'health', component: CategoriesComponent},
    {path:'science', component: CategoriesComponent},
    {path:'sports', component: CategoriesComponent},
    {path:'technology', component: CategoriesComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
