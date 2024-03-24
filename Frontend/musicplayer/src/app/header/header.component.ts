import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Inputs.
  @Input() logged = false;
  //Outputs
  @Output() setLogged = new EventEmitter<any>();

  usuarioData: any = {
    nombre_completo: '',
    rol: 0
  };

  constructor() { }
  faCaretDown = faCaretDown;

  ngOnInit(): void {
    const userSession = JSON.parse(localStorage.getItem('@usuarioLogueado') || '{ }');
    this.usuarioData.nombre_completo = userSession.nombre_completo;
    this.usuarioData.rol = userSession.rol;

  }

  logout() {
    localStorage.clear();
    this.setLogged.emit(false);
  }

}
