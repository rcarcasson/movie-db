import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { AboutComponent } from './pages/about/about.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
