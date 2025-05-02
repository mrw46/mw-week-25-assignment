import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies-list',
  imports: [NgFor],
  templateUrl: './technologies-list.component.html',
  styleUrl: './technologies-list.component.css'
})
export class TechnologiesListComponent {
  technologies = ['Git', 'TypeScript', 'SQL', 'C#']
}
