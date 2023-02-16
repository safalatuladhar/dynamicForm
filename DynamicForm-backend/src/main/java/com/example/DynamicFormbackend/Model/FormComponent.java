package com.example.DynamicFormbackend.Model;


import com.example.DynamicFormbackend.DTO.FormComponentDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import java.util.Set;

@Entity

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@EnableAutoConfiguration
@Data
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

    @Column(name = "rowCount")
    private int rows;
    private int cols;

    @OneToMany(mappedBy = "formComponent", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @OrderBy("orders ASC")
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
        this.className = formComponentDTO.getClassName();
        this.orders = (int) formComponentDTO.getOrders();
        this.label = formComponentDTO.getLabel();
        this.fileType = formComponentDTO.getFileType();
        this.multiple = formComponentDTO.isMultiple();
        this.form = form;
        this.type = formComponentDTO.getType();
        this.rows = formComponentDTO.getRows();
        this.cols = formComponentDTO.getCols();
    }

}
