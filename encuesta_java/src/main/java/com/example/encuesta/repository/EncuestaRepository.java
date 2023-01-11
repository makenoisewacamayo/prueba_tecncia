package com.example.encuesta.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EncuestaRepository extends CrudRepository<EncuestaDao,Long> {
}

