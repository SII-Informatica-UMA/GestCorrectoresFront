import {Component, Directive, OnInit} from '@angular/core';
import { Corrector } from '../../models/correctores';
import { CorrectorService } from '../../service/correctores.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})


export class ListaComponent implements OnInit {

  listaCorrectores: Corrector[] = [];

  constructor(private correctorService: CorrectorService,
              private router: Router) {}

  ngOnInit(): void {
    this.obtenerCorrectores();
  }

  obtenerCorrectores(): void {
    this.correctorService.getAllCorrectors().subscribe(
      correctores => {
      this.listaCorrectores = correctores;
    });
  }

  eliminarCorrector(id: any): void {
    this.correctorService.deleteCorrector(id).subscribe(() => {
      this.obtenerCorrectores();
    });
  }


  addCorrector() {
    this.router.navigate(['add-corrector']);
  }
}
