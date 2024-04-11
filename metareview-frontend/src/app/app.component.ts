import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from "./site-header/site-header.component";
import { FilmCatalogComponent } from "./film-catalog/film-catalog.component";
import { FilmDetailsComponent } from './film-details/film-details.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SiteHeaderComponent, FilmCatalogComponent, FilmDetailsComponent]
})
export class AppComponent {
  title = 'metareview-frontend';
}
