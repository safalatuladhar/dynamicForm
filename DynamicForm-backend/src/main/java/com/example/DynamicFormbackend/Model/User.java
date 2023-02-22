package com.example.DynamicFormbackend.Model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Set;

@Entity
@Data
@Table(name = "user")
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;

    @Column(length = 50, nullable = false, unique = true)
    private String email;

    @Column(length = 200, nullable = false)
    private String password;

    @JsonIgnoreProperties("user")
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<Form> forms;
}
