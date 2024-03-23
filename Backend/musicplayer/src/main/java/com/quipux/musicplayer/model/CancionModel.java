package com.quipux.musicplayer.model;

import jakarta.persistence.*;

@Entity
@Table(name = "cancion")
public class CancionModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCancion", unique = true, nullable = false)
    private Long id;

    @Column(name = "titulo", nullable = false)
    private String titulo;

    @Column(name = "artista", nullable = false)
    private String artista;

    @Column(name = "album", nullable = false)
    private String album;

    @Column(name = "anno", nullable = false)
    private int anno;

    @Column(name = "genero", nullable = false)
    private String genero;

    @ManyToOne
    @JoinColumn(name = "lista_reproduccion_id")
    private ListaReproduccionModel listaReproduccionModel;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getArtista() {
        return artista;
    }

    public void setArtista(String artista) {
        this.artista = artista;
    }

    public String getAlbum() {
        return album;
    }

    public void setAlbum(String album) {
        this.album = album;
    }

    public int getAnno() {
        return anno;
    }

    public void setAnno(int anno) {
        this.anno = anno;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public ListaReproduccionModel getListaReproduccionModel() {
        return listaReproduccionModel;
    }

    public void setListaReproduccionModel(ListaReproduccionModel listaReproduccionModel) {
        this.listaReproduccionModel = listaReproduccionModel;
    }
}
