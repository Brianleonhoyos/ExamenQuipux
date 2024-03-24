import { Component, OnInit } from '@angular/core';
import { ListaReproduccion } from 'src/models/lista-reproduccion.model';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Http } from 'src/libs/Http';

@Component({
  selector: 'app-lista-reproduccion',
  templateUrl: './lista-reproduccion.component.html',
  styleUrls: ['./lista-reproduccion.component.css']
})
export class ListaReproduccionComponent implements OnInit {

  // Iconos.
  faEdit = faEdit;
  faSearch = faSearch;
  faPlus = faPlus;


  ListaReproduccionAll: ListaReproduccion[] = [];
  ListaReproduccion: ListaReproduccion[] = [];
  validarSiHayListaReproduccion = false;
  valorBuscado = '';
  public buscarlistasReproduccionForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.buscarlistasReproduccionForm = this.fb.group({
      titulolistasReproduccion: '',
    });
  }

  ngOnInit(): void {
    this.obtenerListasReproduccion();
  }
  obtenerListasReproduccion() {
    const TraerListReproduccion = Http.instance.get("/lists")
    TraerListReproduccion.then((res: any) => {
      if (!res) {
        this.validarSiHayListaReproduccion = false;
      } else {
        this.validarSiHayListaReproduccion = true;
        this.ListaReproduccionAll = res;
        this.ListaReproduccion = res;
      }
    },
      (err: any) => {
        console.error(err);
      });
  }
  buscarListasReproduccion(event: any) {
    if (event.target.value === "") {
      this.obtenerListasReproduccion();
    } else {
      const TraerListReproduccionxNombre = Http.instance.get2("/lists/" + this.valorBuscado)
      TraerListReproduccionxNombre.then((res: any) => {
        if (!res) {
          this.validarSiHayListaReproduccion = false;
        } else {
          this.validarSiHayListaReproduccion = true;
          this.ListaReproduccionAll = res;
          this.ListaReproduccion = res;
        }
      },
        (err: any) => {
          console.error(err);
        });
    }

  }

  //buscarListasReproduccion(event: any) {
  //  if (event.target.value === "") {
  //    this.obtenerListasReproduccion();
  //  } else {
  //    const value = event.target.value;
  //    const filterlistasReproduccion = this.ListaReproduccionAll.filter((listasReproduccion) => {
  //      const itemDataTitle = listasReproduccion.nombre.toUpperCase();
  //      const itemDataValue = value.toUpperCase();
  //      return itemDataTitle.indexOf(itemDataValue) > -1;
  //    });
  //    if (filterlistasReproduccion.length >= 1) {
  //      this.validarSiHayListaReproduccion = true;
  //    } else {
  //      this.validarSiHayListaReproduccion = false;
  //    }
  //    this.ListaReproduccion = filterlistasReproduccion;
  //  }
  //  this.valorBuscado = event.target.value;
  //}

}
