import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudUsuariosComponent } from './crud-usuarios/crud-usuarios.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { CrudVehiculosComponent } from './crud-vehiculos/crud-vehiculos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [AppComponent, CrudUsuariosComponent, CrudVehiculosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    FormsModule,
    HttpClientModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
