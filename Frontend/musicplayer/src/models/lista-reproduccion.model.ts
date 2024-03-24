export interface ListaReproduccion {
  id: number;
  nombre: string;
  descripcion: string;
  canciones: Cancion[];
}

export interface Cancion {
  id: number;
  titulo: string;
  artista: string;
  album: string;
  anno: number;
  genero: string;
}