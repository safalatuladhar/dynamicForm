package com.example.DynamicFormbackend.Model;


import com.example.DynamicFormbackend.DTO.FormDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import java.util.List;

@Entity

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@EnableAutoConfiguration
@Table(name = "form")
@Data
public class Form {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    @ManyToOne( fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")

    @JsonIgnore
    private User user;

    @OneToMany(mappedBy = "form",cascade = CascadeType.ALL)
    private List<FormComponent> formComponents;


    @JsonIgnore
    @OneToMany(mappedBy = "form",cascade = CascadeType.ALL)
    private List<FormData> formData;

    public Form() {
    }

    public Form(FormDTO formDTO) {
        this.id = formDTO.getId();
        this.name = formDTO.getName();
    }
}
