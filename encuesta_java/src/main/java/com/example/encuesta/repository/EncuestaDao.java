package com.example.encuesta.repository;

import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class EncuestaDao {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;



    String genero;

    String email;

}
