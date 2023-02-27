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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
    private String value;
    private int orders;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    private FormComponent  formComponent;

    @JsonIgnore
    @ManyToOne(fetch =  FetchType.LAZY)
    private AddableField addableField;

    public Option() {
    }

    public Option(OptionDTO optionDTO, FormComponent formComponent) {
        this.id = optionDTO.getId();
        this.name = optionDTO.getName();
        this.value = optionDTO.getValue();
        this.formComponent = formComponent;
        this.orders = optionDTO.getOrders();
    }

    public Option(OptionDTO optionDTO, AddableField addableField) {
        this.id = optionDTO.getId();
        this.name = optionDTO.getName();
        this.value = optionDTO.getValue();
        this.addableField = addableField;
        this.orders = optionDTO.getOrders();
    }


}
