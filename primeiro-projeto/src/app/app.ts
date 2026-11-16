import { Component } from '@angular/core';
import { MeuPrimeiro } from './meu-primeiro/meu-primeiro';
import { MeuPrimeiro2 } from './meu-primeiro2/meu-primeiro2';
import { Cursos } from './cursos/cursos';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [MeuPrimeiro, MeuPrimeiro2, Cursos],
})
export class App {
  title = 'Hello World!';
}
