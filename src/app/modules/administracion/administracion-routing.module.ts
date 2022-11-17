import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudUsuariosComponent } from './crud-usuarios/crud-usuarios.component';
import { CrudVehiculosComponent } from './crud-vehiculos/crud-vehiculos.component';

const routes: Routes = [
  { path: 'usuarios', component: CrudUsuariosComponent },
  { path: 'vehiculos', component: CrudVehiculosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class AdministracionRoutingModule {}
