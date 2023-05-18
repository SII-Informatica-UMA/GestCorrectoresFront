import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from "@angular/router";
import {CorrectorService} from "../../service/correctores.service";
import {Corrector} from "../../models/correctores";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-add-corrector',
  templateUrl: './add-corrector.component.html',
  styleUrls: ['./add-corrector.component.css']
})
export class AddCorrectorComponent implements OnInit {

  constructor(
    public location: Location,
    public router: Router,
    public correctorService: CorrectorService
  ) {
  }

  ngOnInit(): void {
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
      nombre: nombreInput.value,
      apellido1: apellido1Input.value,
      apellido2: apellido2Input.value,
      email: emailInput.value,
      examenes: 0,
      telefono: telefonoInput.value,
    };

    this.correctorService.addCorrector(newCorrector).subscribe(
      (corrector) => {
        this.router.navigate(['/correctores']);
        alert("Corrector creado correctamente.")
      },
      (error) => {
        alert('Error al crear el corrector ' + error.error);
        console.error('Error al crear el corrector:', error);
      });

  }

  back() {
    this.router.navigate(['/correctores']);
  }
}
