package com.quipux.musicplayer.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "lista_reproduccion")
public class ListaReproduccionModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idListaReproduccion", unique = true, nullable = false)
    private Long id;

    @Column(name = "nombre", nullable = false)
    private String nombre;

    @Column(name = "descripcion", nullable = false)
    private String descripcion;

    @OneToMany(mappedBy = "listaReproduccionModel", cascade = CascadeType.ALL)
    private List<CancionModel> canciones;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public List<CancionModel> getCanciones() {
        return canciones;
    }

    public void setCanciones(List<CancionModel> canciones) {
        this.canciones = canciones;
    }
}
