import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding implements OnInit {
  url: string = 'https://angular.io';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com.br/400/200';
  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() {}
  ngOnInit() {}
}
