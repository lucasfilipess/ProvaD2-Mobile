import { Injectable } from '@angular/core';
import { Alunos } from './alunos/alunos.model';
@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  alunosArray: Alunos[] = [
    {
      nome: 'Lucas',
      idade: 20,
      ra: 120115127,
    },
  ];

  getAlunos() {
    return this.alunosArray;
  }
  constructor() {}
}
