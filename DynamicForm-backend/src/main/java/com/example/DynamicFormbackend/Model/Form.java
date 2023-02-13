package com.example.DynamicFormbackend.Model;


import com.example.DynamicFormbackend.DTO.FormDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import java.util.List;

@Entity

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@EnableAutoConfiguration
@Table(name = "form")
public class Form {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String Name;

    //    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
//    @JsonIgnoreProperties("forms")
    @JsonIgnore
    private User user;

    @OneToMany(mappedBy = "form")

    private List<FormComponent> formComponents;

    public Form() {
    }

    public Form(FormDTO formDTO) {
        this.id = formDTO.getId();
        Name = formDTO.getName();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
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

    public List<FormComponent> getFormComponents() {
        return formComponents;
    }

    public void setFormComponents(List<FormComponent> formComponents) {
        this.formComponents = formComponents;
    }
}
