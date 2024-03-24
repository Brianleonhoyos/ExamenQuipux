import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'musicplayer';

  logged = false;

  ngOnInit(): void {
    const validateLocalStorage = localStorage.getItem('@usuarioLogueado');
    if (validateLocalStorage) {
      this.logged = true;
    } else {
      this.logged = false;
    }
  }

  loggedUser(respuesta: any) {
    this.logged = respuesta;
  }
}
