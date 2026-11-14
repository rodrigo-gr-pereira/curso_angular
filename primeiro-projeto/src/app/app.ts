import { Component, signal } from '@angular/core';
import { MeuPrimeiro } from './meu-primeiro/meu-primeiro';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [MeuPrimeiro],
})
export class App {
  title = 'Hello World!';
}
