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
    private String types;


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

    public String getTypes() {
        return types;
    }

    public void setTypes(String types) {
        this.types = types;
    }

    public List<OptionDTO> getOptionsDTO() {
        return optionsDTO;
    }

    public void setOptionsDTO(List<OptionDTO> optionsDTO) {
        this.optionsDTO = optionsDTO;
    }
}
