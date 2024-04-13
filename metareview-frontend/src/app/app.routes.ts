import { Routes } from '@angular/router';
import { FilmCatalogComponent } from './film-catalog/film-catalog.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReviewSectionComponent } from './review-section/review-section.component';

export const routes: Routes = [{path: "home", component: HomeComponent},
  {path: "film", component: FilmCatalogComponent},
  {path: "review/:id", component: ReviewSectionComponent},
  {path: "about", component: AboutComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'}

];
