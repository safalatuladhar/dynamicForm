package com.example.DynamicFormbackend.Model;


import com.example.DynamicFormbackend.DTO.OptionDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity

//@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Table(name = "options")
public class Option {
    @Id
    @GeneratedValue()
    private long id;

    private String name;

//    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "form_component_id")
    private FormComponent  formComponent;

    public Option() {
    }

    public Option(OptionDTO optionDTO, FormComponent formComponent) {
        this.id = optionDTO.getId();
        this.name = optionDTO.getName();
        this.formComponent = formComponent;
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

    public FormComponent getFormComponent() {
        return formComponent;
    }

    public void setFormComponent(FormComponent formComponent) {
        this.formComponent = formComponent;
    }
}
