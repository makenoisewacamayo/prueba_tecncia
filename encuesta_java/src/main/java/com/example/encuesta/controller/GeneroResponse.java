package com.example.encuesta.controller;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode
public class GeneroResponse {
    String genero;
    int count;
}
