package com.example.encuesta.controller;

import com.example.encuesta.repository.EncuestaDao;
import com.example.encuesta.repository.EncuestaRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@Slf4j
public class EncuestaController {

    EncuestaRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping(value = "/resultados")
    public List<GeneroResponse> getResultados() {

        List<EncuestaDao> results = (List<EncuestaDao>) repository.findAll();
        return results.stream()
                .map(g -> map(results, g))
                .distinct()
                .collect(Collectors.toList());
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping(value = "/encuesta")
    public void saveEncuesta(@RequestBody EncuestaRequest req) {
        repository.save(EncuestaDao.builder()
                .genero(req.getGenero())
                .email(req.getEmail())
                .build());
    }

    private static int getCount(List<EncuestaDao> results, EncuestaDao g) {
        return (int) results.stream()
                .filter(r -> r.getGenero().equals(g.getGenero()))
                .count();
    }
    private static GeneroResponse map(List<EncuestaDao> results, EncuestaDao g) {
        return GeneroResponse.builder()
                .count(getCount(results, g))
                .genero(g.getGenero())
                .build();
    }
}
