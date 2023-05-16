import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {CorrectorService} from "../../service/correctores.service";
import {Corrector} from "../../models/correctores";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-editar-corrector',
  templateUrl: './editar-corrector.component.html',
  styleUrls: ['./editar-corrector.component.css']
})
export class EditarCorrectorComponent implements OnInit {

  @Input() correctorSeleccionado!: Corrector;

  constructor(
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private correctorService: CorrectorService
  ) {
  }

  ngOnInit(): void {
    console.log(this.correctorSeleccionado);
    const nombreInput = document.getElementById("nombre") as HTMLInputElement;
    const apellido1Input = document.getElementById("apellido1") as HTMLInputElement;
    const apellido2Input = document.getElementById("apellido2") as HTMLInputElement;
    const telefonoInput = document.getElementById("telefono") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
  }

  async send() {

    const nombreInput = document.getElementById("nombre") as HTMLInputElement;
    const apellido1Input = document.getElementById("apellido1") as HTMLInputElement;
    const apellido2Input = document.getElementById("apellido2") as HTMLInputElement;
    const telefonoInput = document.getElementById("telefono") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;

    if (!nombreInput.value || !apellido1Input.value || !apellido2Input.value || !telefonoInput.value || !emailInput.value) {
      alert("Campos incompletos.");
      return;
    }

    const newCorrector: Corrector = {
      id: this.correctorSeleccionado?.id,
      nombre: nombreInput.value,
      apellido1: apellido1Input.value,
      apellido2: apellido2Input.value,
      email: emailInput.value,
      examenes: 0,
      telefono: telefonoInput.value,
    };

    console.log(this.correctorSeleccionado);
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
