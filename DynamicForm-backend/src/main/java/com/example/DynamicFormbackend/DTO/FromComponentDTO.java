package com.example.DynamicFormbackend.DTO;

import java.util.List;

public class FromComponentDTO {
    private long id;
    private String name;
    private String value;
    private Boolean disabled;
    private String placeholder;
    private Boolean required;
    private String ids;
    private String classs;
    private int orders;
    private String type;

    private String label;
    private String fileType;
    private Boolean multiple;


    private List<OptionDTO> optionsDTO;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Boolean isDisabled() {
        return disabled;
    }

    public void setDisabled(Boolean disabled) {
        this.disabled = disabled;
    }

    public String getPlaceholder() {
        return placeholder;
    }

    public void setPlaceholder(String placeholder) {
        this.placeholder = placeholder;
    }

    public Boolean isRequired() {
        return required;
    }

    public void setRequired(Boolean required) {
        this.required = required;
    }

    public String getIds() {
        return ids;
    }

    public void setIds(String ids) {
        this.ids = ids;
    }

    public String getClasss() {
        return classs;
    }

    public void setClasss(String classs) {
        this.classs = classs;
    }

    public int getOrders() {
        return orders;
    }

    public void setOrders(int orders) {
        this.orders = orders;
    }

    public List<OptionDTO> getOptions() {
        return optionsDTO;
    }

    public void setOptions(List<OptionDTO> options) {
        this.optionsDTO = options;
    }


    public List<OptionDTO> getOptionsDTO() {
        return optionsDTO;
    }

    public void setOptionsDTO(List<OptionDTO> optionsDTO) {
        this.optionsDTO = optionsDTO;
    }

    public Boolean getDisabled() {
        return disabled;
    }

    public Boolean getRequired() {
        return required;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public Boolean getMultiple() {
        return multiple;
    }

    public void setMultiple(Boolean multiple) {
        this.multiple = multiple;
    }
}
