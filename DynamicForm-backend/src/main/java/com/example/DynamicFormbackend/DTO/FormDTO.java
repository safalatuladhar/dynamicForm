package com.example.DynamicFormbackend.DTO;

import java.util.List;

public class FormDTO {

    private Long id;
    private String Name;
    private Long user_id;
    private List<FormComponentDTO> formComponents;

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

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public List<FormComponentDTO> getFormComponents() {
        return formComponents;
    }

    public void setFormComponents(List<FormComponentDTO> formComponentDTO) {
        this.formComponents = formComponentDTO;
    }
}
