package com.example.DynamicFormbackend.Model;


import com.example.DynamicFormbackend.DTO.FromComponentDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
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
    private String value;
    private Boolean disabled;
    private String placeholder;
    private Boolean required;
    private String ids;
    private String classs;
    private int orders;

//    @JsonIgnoreProperties("formComponent")
    @OneToMany(mappedBy = "formComponent", cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    private Set<Option> options;

//    @JsonIgnoreProperties("formComponents")
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "form_id")
    private Form form;

    public FormComponent() {
    }

    public FormComponent(FromComponentDTO formComponentDTO, Form form) {
        this.id = formComponentDTO.getId();
        this.name = formComponentDTO.getName();
        this.value = formComponentDTO.getValue();
        this.disabled = formComponentDTO.isDisabled();
        this.placeholder = formComponentDTO.getPlaceholder();
        this.required = formComponentDTO.isRequired();
        this.ids = formComponentDTO.getIds();
        this.classs = formComponentDTO.getClasss();
        this.orders = formComponentDTO.getOrder();
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
}
