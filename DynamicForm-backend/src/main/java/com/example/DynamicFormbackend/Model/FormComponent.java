package com.example.DynamicFormbackend.Model;


import com.example.DynamicFormbackend.DTO.FormComponentDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import java.util.Set;

@Entity

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@EnableAutoConfiguration
//@Table(name = "form_component")
public class FormComponent {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private int type;
    private String value;
    private boolean disabled;
    private String placeholder;
    private boolean required;
    private String ids;
    private String className;
    private int orders;
    private String label;
    private String fileType;
    private boolean multiple;

    @OneToMany(mappedBy = "formComponent", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<Option> options;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    private Form form;

    public FormComponent() {
    }


    public FormComponent(FormComponentDTO formComponentDTO, Form form) {
        this.id = formComponentDTO.getId();
        this.name = formComponentDTO.getName();
        this.value = formComponentDTO.getValue();
        this.disabled = formComponentDTO.isDisabled();
        this.placeholder = formComponentDTO.getPlaceholder();
        this.required = formComponentDTO.isRequired();
        this.ids = formComponentDTO.getIds();
        this.className = formComponentDTO.getClasss();
        this.orders = (int) formComponentDTO.getOrders();
        this.label = formComponentDTO.getLabel();
        this.fileType = formComponentDTO.getFileType();
        this.multiple = formComponentDTO.getMultiple();
        this.form = form;

    }

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

    public Boolean getDisabled() {
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

    public Boolean getRequired() {
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

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public int getOrders() {
        return orders;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public boolean isDisabled() {
        return disabled;
    }

    public void setDisabled(boolean disabled) {
        this.disabled = disabled;
    }

    public boolean isRequired() {
        return required;
    }

    public void setRequired(boolean required) {
        this.required = required;
    }

    public boolean isMultiple() {
        return multiple;
    }

    public void setMultiple(boolean multiple) {
        this.multiple = multiple;
    }

    public void setOrders(int orders) {
        this.orders = orders;
    }

    public Set<Option> getOptions() {
        return options;
    }

    public void setOptions(Set<Option> options) {
        this.options = options;
    }

    public Form getForm() {
        return form;
    }

    public void setForm(Form form) {
        this.form = form;
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
