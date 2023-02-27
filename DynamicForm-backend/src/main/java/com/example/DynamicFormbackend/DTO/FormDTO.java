package com.example.DynamicFormbackend.DTO;

import lombok.Data;

import java.util.List;

@Data
public class FormDTO {

    private Long id;
    private String name;
    private Long userId;
    private List<FormComponentDTO> formComponents;
    private List<AddableFieldDTO> addableFields;

}
