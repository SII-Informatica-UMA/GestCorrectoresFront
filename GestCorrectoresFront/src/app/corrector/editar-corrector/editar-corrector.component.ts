import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {CorrectorService} from "../../service/correctores.service";
import {Corrector} from "../../models/correctores";

@Component({
  selector: 'app-editar-corrector',
  templateUrl: './editar-corrector.component.html',
  styleUrls: ['./editar-corrector.component.css']
})
export class EditarCorrectorComponent implements OnInit {

  // Inside your component class
  corrector: any = {
    nombre: '',
    apellido1: '',
    apellido2: '',
    email: '',
    telefono: '',
    examenes: ''
  };


  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private correctorService: CorrectorService
  ) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.correctorService.getCorrectorById(id).subscribe(
      data => {
        this.corrector = data;
      },
      err => {
        alert('Error al acceder al corrector ' + err.error);
        console.error('Error al acceder al corrector', err);
        this.router.navigate(['/correctores']);
      }
    );
  }

  async onUpdate() {

    const nombreInput = document.getElementById("nombre") as HTMLInputElement;
    const apellido1Input = document.getElementById("apellido1") as HTMLInputElement;
    const apellido2Input = document.getElementById("apellido2") as HTMLInputElement;
    const telefonoInput = document.getElementById("telefono") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;

    const newCorrector: Corrector = {
      id: this.corrector.id,
      nombre: nombreInput.value,
      apellido1: apellido1Input.value,
      apellido2: apellido2Input.value,
      email: emailInput.value,
      examenes: 0,
      telefono: telefonoInput.value,
    };

    console.log(newCorrector);
    this.correctorService.updateCorrector(newCorrector).subscribe(
      (corrector) => {
        this.router.navigate(['/correctores']);
        alert("Corrector editado correctamente.")
      },
      (error) => {
        alert('Error al editar el corrector ' + error.error);
        console.error('Error al editar el corrector:', error);
      });

  }

  back() {
    this.router.navigate(['/correctores']);
  }
}
