import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FilmCatalogComponent } from '../film-catalog/film-catalog.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FilmCatalogComponent, HomeComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css',
})
export class SiteHeaderComponent {}
