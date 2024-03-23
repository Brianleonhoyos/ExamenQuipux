package com.quipux.musicplayer.model.dto;

import java.util.List;

public class ListaReproduccionDTO {
    private String nombre;
    private String descripcion;
    private List<CancionDTO> canciones;

    public ListaReproduccionDTO() {
    }

    public ListaReproduccionDTO(String nombre, String descripcion, List<CancionDTO> canciones) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.canciones = canciones;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public List<CancionDTO> getCanciones() {
        return canciones;
    }

    public void setCanciones(List<CancionDTO> canciones) {
        this.canciones = canciones;
    }
}
