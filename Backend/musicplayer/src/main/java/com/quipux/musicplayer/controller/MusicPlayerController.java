package com.quipux.musicplayer.controller;

import com.quipux.musicplayer.model.CancionModel;
import com.quipux.musicplayer.model.ListaReproduccionModel;
import com.quipux.musicplayer.model.dto.CancionDTO;
import com.quipux.musicplayer.model.dto.ListaReproduccionDTO;
import com.quipux.musicplayer.repository.ListaReproduccionRepository;
import com.quipux.musicplayer.service.MusicPlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/lists")
public class MusicPlayerController {
    @Autowired
    private MusicPlayerService musicPlayerService;

    @PostMapping
    public ResponseEntity<ListaReproduccionModel> crearListaReproduccion(@RequestBody ListaReproduccionDTO listaReproduccionDTO) {
        if (listaReproduccionDTO.getNombre() == null || listaReproduccionDTO.getNombre().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        ListaReproduccionModel savedListaReproduccion = musicPlayerService.save(listaReproduccionDTO);
        return ResponseEntity.created(URI.create("/lists/" + savedListaReproduccion.getId())).body(savedListaReproduccion);
    }

    @GetMapping
    public List<ListaReproduccionModel> obtenerTodasListasReproduccion() {
        return musicPlayerService.findAll();
    }

    @GetMapping("/{listName}")
    public ResponseEntity<ListaReproduccionModel> obtenerListaReproduccionPorId(@PathVariable String listName) {
        List<ListaReproduccionModel> listaReproduccion = musicPlayerService.findByNombre(listName);
        if (!listaReproduccion.isEmpty()) {
            return ResponseEntity.ok(listaReproduccion.get(0));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{listName}")
    public ResponseEntity<Void> borrarListaReproduccion(@PathVariable String listName) {
        List<ListaReproduccionModel> listaReproduccion = musicPlayerService.findByNombre(listName);
        if (!listaReproduccion.isEmpty()) {
            musicPlayerService.deleteById(listaReproduccion.get(0).getId());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
