package com.quipux.musicplayer.service.impl;

import com.quipux.musicplayer.model.CancionModel;
import com.quipux.musicplayer.model.ListaReproduccionModel;
import com.quipux.musicplayer.model.dto.CancionDTO;
import com.quipux.musicplayer.model.dto.ListaReproduccionDTO;
import com.quipux.musicplayer.repository.ListaReproduccionRepository;
import com.quipux.musicplayer.service.MusicPlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MusicPlayerServiceImpl  implements  MusicPlayerService{

    @Autowired
    private ListaReproduccionRepository listaReproduccionRepository;


    @Override
    public ListaReproduccionModel save(ListaReproduccionDTO listaReproduccionDTO) {
        ListaReproduccionModel listaReproduccionModel = new ListaReproduccionModel();
        listaReproduccionModel.setNombre(listaReproduccionDTO.getNombre());
        listaReproduccionModel.setDescripcion(listaReproduccionDTO.getDescripcion());

        ListaReproduccionModel savedListaReproduccion = listaReproduccionRepository.save(listaReproduccionModel);

        List<CancionModel> canciones = new ArrayList<>();
        for (CancionDTO cancionDTO : listaReproduccionDTO.getCanciones()) {
            CancionModel cancionModel = new CancionModel();
            cancionModel.setTitulo(cancionDTO.getTitulo());
            cancionModel.setArtista(cancionDTO.getArtista());
            cancionModel.setAlbum(cancionDTO.getAlbum());
            cancionModel.setAnno(cancionDTO.getAnno());
            cancionModel.setGenero(cancionDTO.getGenero());
            cancionModel.setListaReproduccionModel(savedListaReproduccion);
            canciones.add(cancionModel);
        }

        listaReproduccionModel.setCanciones(canciones);
        return listaReproduccionRepository.save(listaReproduccionModel);
    }

    @Override
    public List<ListaReproduccionModel> findAll() {
        return listaReproduccionRepository.findAll();
    }

    @Override
    public List<ListaReproduccionModel> findByNombre(String nombre) {
        return listaReproduccionRepository.findByNombre(nombre);
    }

    @Override
    public void deleteById(Long id) {
        listaReproduccionRepository.deleteById(id);
    }
}
