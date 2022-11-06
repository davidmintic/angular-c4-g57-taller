import { Component, OnInit } from '@angular/core';
import { ServiceRequestService } from '../service-request.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

interface Usuario {
  idUsuario: string;
  nombre: string;
  telefono: number;
  tipoUsuario: string;
}

@Component({
  selector: 'crud-usuarios',
  templateUrl: './crud-usuarios.component.html',
  styleUrls: ['./crud-usuarios.component.scss'],
})
export class CrudUsuariosComponent implements OnInit {
  listOfData: Usuario[] = [];
  inputValue: string = '';
  selectedValue = '';

  showFormUser = false;
  modeForm = 'adicion';

  sedeCurrent = '';
  sedes: any = [];

  formGroup: FormGroup = new FormGroup({});

  constructor(
    private serviceRequest: ServiceRequestService,
    private fb: FormBuilder
  ) {
    this.getSedes(null);

    this.formGroup = this.fb.group({
      idUsuario: [''],
      nombre: [''],
      telefono: [''],
      tipoUsuario: ['mecanico'],
      contrasenia: ['xxx'],
      sedeId: [''],
    });
    // UsergroupAddOutlined;
  }

  ngOnInit(): void {}

  findByName() {
    if (this.inputValue) {
      // const filter = { nombre: this.inputValue };
      this.getUsers(this.inputValue);
    } else {
      this.getUsers(null);
    }
  }

  getUsers(filter: any): void {
    this.serviceRequest.getData('usuarios', filter).subscribe(
      (data) => {
        this.listOfData = data;
      },

      (error) => {
        console.log(error);
      }
    );
  }

  getUsersBySede(idSede: any): void {
    this.serviceRequest
      .getData('sedes/' + idSede + '/usuarios', null)
      .subscribe(
        (data) => {
          this.listOfData = data;
        },

        (error) => {
          console.log(error);
        }
      );
  }

  getSedes(filter: any): void {
    this.serviceRequest.getData('sedes', filter).subscribe(
      (data) => {
        this.sedes = data;
        this.sedeCurrent = this.sedes[0].idSede;
        this.formGroup.controls['sedeId'].setValue(this.sedeCurrent);

        this.getUsersBySede(this.sedeCurrent);
      },

      (error) => {
        console.log(error);
      }
    );
  }

  saveUser(): void {
    const datos = this.formGroup.getRawValue();

    this.serviceRequest.postData('usuarios', JSON.stringify(datos)).subscribe(
      (data) => {
        const listNueva = JSON.parse(JSON.stringify(this.listOfData));
        listNueva.unshift(data);

        this.listOfData = listNueva;

        Swal.fire({
          title: '¡Exito!',
          text: 'Usuario agregado correctamente',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      },
      (error) => {
        alert('error');
      }
    );
  }

  deleteUser(idUser: string): void {
    Swal.fire({
      title: '¿Estás seguro de eliminar el usuario?',
      // showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sí, quiero eliminar',
      cancelButtonText: `No, cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.serviceRequest.deleteData('usuarios', idUser).subscribe(
          (data) => {
            const listNueva = JSON.parse(JSON.stringify(this.listOfData));
            // listNueva.unshift(data);

            for (const i in listNueva) {
              if (listNueva[i].idUsuario == idUser) {
                listNueva.splice(i, 1);
                break;
              }
            }

            this.listOfData = listNueva;
            Swal.fire('¡Usuario eliminado!', '', 'success');
          },

          (error) => {
            console.log('error: ' + error);
          }
        );
      }
    });
  }

  toggleFormAdd(): void {
    this.showFormUser = !this.showFormUser;
    this.modeForm = 'adicion';
    this.formGroup.reset();
    this.formGroup.controls['tipoUsuario'].setValue('mecanico');
    this.formGroup.controls['contrasenia'].setValue('xxx');
    this.formGroup.controls['sedeId'].setValue(this.sedeCurrent);
    this.formGroup.controls['idUsuario'].enable();
  }

  selectUser(user: any) {
    this.modeForm = 'edicion';
    this.showFormUser = true;
    this.formGroup.patchValue(user);
    this.formGroup.controls['idUsuario'].disable();
  }

  editUser() {
    const datos = this.formGroup.getRawValue();
    this.serviceRequest
      .patchData('usuarios', JSON.stringify(datos), datos.idUsuario)
      .subscribe(
        (data) => {
          const listNueva = JSON.parse(JSON.stringify(this.listOfData));
          for (const i in listNueva) {
            if (listNueva[i].idUsuario == datos.idUsuario) {
              listNueva[i] = datos;
              break;
            }
          }

          this.listOfData = listNueva;

          Swal.fire('¡Usuario editado!', '', 'success');
        },
        (error) => {
          alert('error');
        }
      );
  }

  changeSede(evento: any): void {
    console.log(this.sedeCurrent);
    this.getUsersBySede(this.sedeCurrent);
  }
}
