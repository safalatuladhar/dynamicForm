package com.example.DynamicFormbackend.Model;


import com.example.DynamicFormbackend.DTO.OptionDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@Table(name = "options")
public class Option {
    @Id
    @GeneratedValue()
    private long id;

    private String name;
    private String value;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    private FormComponent  formComponent;

    public Option() {
    }

    public Option(OptionDTO optionDTO, FormComponent formComponent) {
        this.id = optionDTO.getId();
        this.name = optionDTO.getName();
        this.value = optionDTO.getValue();
        this.formComponent = formComponent;
    }

}
