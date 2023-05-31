import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de Usuarios';
  mensaje: string = '';
  registrado: boolean = false;
  usuario = {
    nombre: '',
    apellido: '',
  };
  entradas: Array<{titulo: string}>;

  constructor(){

    this.entradas=[
      {titulo: 'Python cada dia mas presente!'},
      {titulo: 'Java presente hace mas de 20 años!'},
      {titulo: 'JavasCript cada vez mas funcional!'},
      {titulo: 'TypeScript es el mejor lenguaje.'},
      {titulo: 'Que es godot??'},
    ]

  }

  register(){
    this.registrado = true;
    this.mensaje = "Usuario registrado con exito"
  }
}
