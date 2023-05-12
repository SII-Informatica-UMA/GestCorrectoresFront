import { Component, OnInit } from '@angular/core';
import { Corrector } from '../../models/correctores';
import { CorrectorService } from '../../service/correctores.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaCorrectores: Corrector[] = [];

  constructor(private correctorService: CorrectorService) {}

  ngOnInit(): void {
    this.obtenerCorrectores();
  }

  obtenerCorrectores(): void {
    this.correctorService.getAllCorrectors().subscribe(
      correctores => {
      this.listaCorrectores = correctores;
    },
    err => {
      console.log(err);
    }
    );
  }

  editarCorrector(id: number): void {
    // Lógica para editar un corrector
  }

  eliminarCorrector(id: number): void {
    // Lógica para eliminar un corrector
  }

}
