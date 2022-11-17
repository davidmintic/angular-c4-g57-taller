import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudUsuariosComponent } from './modules/administracion/crud-usuarios/crud-usuarios.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { CrudVehiculosComponent } from './modules/administracion/crud-vehiculos/crud-vehiculos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MultiplicadorPipe } from './pipes/exponencial';

@NgModule({
  declarations: [
    AppComponent,
    CrudUsuariosComponent,
    CrudVehiculosComponent,
    MultiplicadorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    NzModalModule,
    NzInputNumberModule,
    NzButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
