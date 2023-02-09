package com.example.DynamicFormbackend.DTO;

import java.util.List;

public class FormDetailDTO {
    private FormDTO formDTO;
    private List<FromComponentDTO> fromComponentDTO;

    public FormDTO getFormDTO() {
        return formDTO;
    }

    public void setFormDTO(FormDTO formDTO) {
        this.formDTO = formDTO;
    }

    public List<FromComponentDTO> getFromComponentDTO() {
        return fromComponentDTO;
    }

    public void setFromComponentDTO(List<FromComponentDTO> fromComponentDTO) {
        this.fromComponentDTO = fromComponentDTO;
    }
}
