import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TechnologiesListComponent } from './technologies-list/technologies-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TechnologiesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my basic Angular app';
}
