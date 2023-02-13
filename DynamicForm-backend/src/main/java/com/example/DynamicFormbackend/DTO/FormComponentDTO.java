package com.example.DynamicFormbackend.DTO;

import java.util.List;

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
    private String type;
    private String label;
    private String fileType;
    private boolean multiple;


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

    public boolean isDisabled() {
        return disabled;
    }

    public void setDisabled(boolean disabled) {
        this.disabled = disabled;
    }

    public String getPlaceholder() {
        return placeholder;
    }

    public void setPlaceholder(String placeholder) {
        this.placeholder = placeholder;
    }

    public boolean isRequired() {
        return required;
    }

    public void setRequired(boolean required) {
        this.required = required;
    }

    public String getIds() {
        return ids;
    }

    public void setIds(String ids) {
        this.ids = ids;
    }

    public String getClasss() {
        return className;
    }

    public void setClasss(String classs) {
        this.className = classs;
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

    public boolean getDisabled() {
        return disabled;
    }

    public boolean getRequired() {
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

    public boolean getMultiple() {
        return multiple;
    }

    public void setMultiple(boolean multiple) {
        this.multiple = multiple;
    }
}
