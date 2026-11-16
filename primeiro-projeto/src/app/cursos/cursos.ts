import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos-service';

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
  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://www.loiane.training';
    this.cursos = cursosService.getCursos();

    /*for (let i = 0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
    }*/

    //var servico = new CursosService();

    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {}
}
