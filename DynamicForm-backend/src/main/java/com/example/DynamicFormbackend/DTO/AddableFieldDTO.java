package com.example.DynamicFormbackend.DTO;

import lombok.Data;

import java.util.List;

@Data
public class AddableFieldDTO {
    private long id;
    private String name;
    private String value;
    private boolean disabled;
    private String placeholder;
    private boolean required;
    private String ids;
    private String className;
    private int orders;
    private String label;
    private boolean multiple;
    private List<OptionDTO> options;
    private String pattern;
}
