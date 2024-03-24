package com.quipux.musicplayer.repository;

import com.quipux.musicplayer.model.ListaReproduccionModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ListaReproduccionRepository extends JpaRepository<ListaReproduccionModel, Long> {
    List<ListaReproduccionModel> findByNombre(String listName);
}
