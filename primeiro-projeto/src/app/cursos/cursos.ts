import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css',
})
export class Cursos implements OnInit {
  nomePortal: string;

  cursos: string[] = ['Java', 'Angular', 'Spring Boot'];
  constructor() {
    this.nomePortal = 'http://www.loiane.training';

    for (let i = 0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
    }
  }

  ngOnInit(): void {}
}
