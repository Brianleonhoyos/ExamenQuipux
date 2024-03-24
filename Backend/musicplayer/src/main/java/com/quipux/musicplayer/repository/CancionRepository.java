package com.quipux.musicplayer.repository;

import com.quipux.musicplayer.model.CancionModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CancionRepository extends JpaRepository<CancionModel, Long> {
}
