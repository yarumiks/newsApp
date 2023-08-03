import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent, children: [
    {path:'news', component: HomeComponent},
    {path:'business', component: HomeComponent},
    {path:'entertainment', component: HomeComponent},
    {path:'health', component: HomeComponent},
    {path:'science', component: HomeComponent},
    {path:'sports', component: HomeComponent},
    {path:'technology', component: HomeComponent},
    {path: '**', redirectTo: '', pathMatch: 'full' }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
