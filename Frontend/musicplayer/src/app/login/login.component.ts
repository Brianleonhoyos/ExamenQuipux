import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Http } from 'src/libs/Http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Inputs.
  @Input() logged = false;
  //Outputs
  @Output() setLogged = new EventEmitter<any>();

  // Variables
  public userForm: FormGroup;
  rol: string = "";
  numero_documento: string = "";
  password: string = "";

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    // Form element defined below
    this.userForm = this.fb.group({
      numero_documento: '',
      password: ''
    });
  }

  ngOnInit(): void {
    // console.log("Init");
  }

  submitForm() {
    const numeroDocumento = this.userForm.get('numero_documento')?.value;
    const password = this.userForm.get('password')?.value;

    if (numeroDocumento === '2180428' && password === '123456') {
      // Si la validación es exitosa, guardar en el almacenamiento local
      const usuario = { numeroDocumento, password };
      localStorage.setItem('@usuarioLogueado', JSON.stringify(usuario));
      // Emitir evento para indicar que el usuario está logueado
      this.setLogged.emit(true);
    } else {
      // Si la validación falla, limpiar el almacenamiento local y mostrar un mensaje de error
      localStorage.clear();
      this.setLogged.emit(false);
      this.toastr.error('El número de documento o la contraseña son incorrectos', '¡Error!');
    }
  }

}
