import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ServiceRequestService } from '../service-request.service';

@Component({
  selector: 'app-crud-vehiculos',
  templateUrl: './crud-vehiculos.component.html',
  styleUrls: ['./crud-vehiculos.component.scss'],
})
export class CrudVehiculosComponent
  implements OnInit, AfterContentInit, OnDestroy
{
  contador = 0;
  edad = 3;

  constructor() {
    console.log('entró constructor');
    this.contador = 3;
    console.log('prueba');
  }

  ngOnInit(): void {
    console.log('entró onInit');
    this.contador = 7;
  }

  ngAfterContentInit(): void {
    console.log('entró after Content init');
  }

  ngOnDestroy(): void {
    console.log('se destruyó');
  }

  cambiarTitulo(): void {
    this.contador++;
  }

  focusEdad(): void {
    console.log('hiciste foco en el input');
  }

  blurEdad(): void {
    console.log('dejaste de hacer foco');
  }
}
