package com.quipux.musicplayer.service;

import com.quipux.musicplayer.model.ListaReproduccionModel;
import com.quipux.musicplayer.model.dto.ListaReproduccionDTO;

import java.util.List;

public interface MusicPlayerService {

    ListaReproduccionModel save(ListaReproduccionDTO listaReproduccionDTO);

    List<ListaReproduccionModel> findAll();

    List<ListaReproduccionModel> findByNombre(String nombre);

    void deleteById(Long id);
}
