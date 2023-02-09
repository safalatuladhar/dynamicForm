package com.example.DynamicFormbackend.Model;


import com.example.DynamicFormbackend.DTO.FormDTO;
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
@Table(name = "form")
public class Form {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String Name;

//    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id",referencedColumnName = "id")
//    @JsonIgnoreProperties("forms")
    @JsonIgnore
    private User user;

    @OneToMany(mappedBy = "form")
//    @JsonIgnoreProperties("form")
    @JsonIgnore
    private Set<FormComponent> formComponents;

    public Form() {
    }

    public Form(FormDTO formDTO) {
        this.id = formDTO.getId();
        Name = formDTO.getName();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<FormComponent> getFormComponents() {
        return formComponents;
    }

    public void setFormComponents(Set<FormComponent> formComponents) {
        this.formComponents = formComponents;
    }
}
