package com.example.DynamicFormbackend.DTO;

import lombok.Data;

import java.util.List;

@Data
public class FormComponentDTO {
    private long id;
    private String name;
    private String value;
    private boolean disabled;
    private String placeholder;
    private boolean required;
    private String ids;
    private String className;
    private int orders;
    private int type;
    private String label;
    private String fileType;
    private boolean multiple;
    private int rows;
    private int cols;
    private List<OptionDTO> options;

}
