package com.example.DynamicFormbackend.Model;

import com.example.DynamicFormbackend.DTO.AddableFieldDTO;
import com.example.DynamicFormbackend.DTO.FormComponentDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import java.util.Set;
@Entity
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@EnableAutoConfiguration
@Data
@NoArgsConstructor
@Table(name = "addable_field")
public class AddableField {

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
    private String pattern;

    @Column(name = "rowCount")
    private int rows;
    private int cols;

    @OneToMany(mappedBy = "addableField", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @OrderBy("orders ASC")
    private Set<Option> options;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    private Form form;

    public AddableField(AddableFieldDTO addableFieldDTO, Form form) {
        this.id = addableFieldDTO.getId();
        this.name = addableFieldDTO.getName();
        this.value = addableFieldDTO.getValue();
        this.disabled = addableFieldDTO.isDisabled();
        this.placeholder = addableFieldDTO.getPlaceholder();
        this.required = addableFieldDTO.isRequired();
        this.ids = addableFieldDTO.getIds();
        this.className = addableFieldDTO.getClassName();
        this.orders = (int) addableFieldDTO.getOrders();
        this.label = addableFieldDTO.getLabel();
        this.fileType = addableFieldDTO.getFileType();
        this.multiple = addableFieldDTO.isMultiple();
        this.form = form;
        this.type = addableFieldDTO.getType();
        this.rows = addableFieldDTO.getRows();
        this.cols = addableFieldDTO.getCols();
        this.pattern = addableFieldDTO.getPattern();
    }


}
