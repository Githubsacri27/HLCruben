import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  cancionesRegistradas: string[] = [];

  @ViewChild('formulario') formulario!: NgForm;

  enviarFormulario(datosFormulario: any): void {
    const { cancion, autor, formato } = datosFormulario;
    const nuevaCancion = `${cancion} - ${autor} (${formato})`;
    this.cancionesRegistradas.push(nuevaCancion);

    this.formulario.reset();
    
  }

}
