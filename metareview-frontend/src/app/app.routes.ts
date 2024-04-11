import { Routes } from '@angular/router';
import { FilmCatalogComponent } from './film-catalog/film-catalog.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [{path: "home", component: HomeComponent},
  {path: "film", component: FilmCatalogComponent},
  {path: "about", component: AboutComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'}

];
