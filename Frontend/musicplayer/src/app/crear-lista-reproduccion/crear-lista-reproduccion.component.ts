import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Http } from 'src/libs/Http';
import { Cancion } from 'src/models/lista-reproduccion.model';

@Component({
  selector: 'app-crear-lista-reproduccion',
  templateUrl: './crear-lista-reproduccion.component.html',
  styleUrls: ['./crear-lista-reproduccion.component.css']
})
export class CrearListaReproduccionComponent implements OnInit {

  public crearListaReproduccionComponent: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private toastr: ToastrService) {
    this.crearListaReproduccionComponent = this.fb.group({
      titulo: '',
      descripcion: '',
      canciones: this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }

  get cancionesFormArray() {
    return this.crearListaReproduccionComponent.get('canciones') as FormArray;
  }

  addCancion() {
    this.cancionesFormArray.push(this.fb.group({
      titulo: '',
      artista: '',
      album: '',
      anno: 0,
      genero: '',
      // Agrega más campos aquí según la estructura de la canción
    }));
  }

  submitForm() {
    const body = {
      titulo: this.crearListaReproduccionComponent.get('titulo')?.value,
      descripcion: this.crearListaReproduccionComponent.get('descripcion')?.value,
      canciones: this.crearListaReproduccionComponent.get('canciones')?.value,
    }
    const sendBody = JSON.stringify(body);

    const sendTutorial = Http.instance.post("/lists", sendBody);
    sendTutorial.then((res: any) => {
      if (res.mensaje) {
        this.toastr.error(res.mensaje, '¡Error!');
      } else {
        this.toastr.success("Lista de Reproduccion creada con exito.", "");
        this.router.navigate(["lista-reproduccion"]);
      }
    }).catch((err: any) => {
      alert(err);
    })


  }

}
