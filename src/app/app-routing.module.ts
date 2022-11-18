import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrudUsuariosComponent } from "./crud-usuarios/crud-usuarios.component";
import { CrudVehiculosComponent } from "./crud-vehiculos/crud-vehiculos.component";

const routes: Routes = [
  { path: "", component: CrudUsuariosComponent },
  { path: "usuarios", component: CrudUsuariosComponent },
  { path: "vehiculos", component: CrudVehiculosComponent },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
