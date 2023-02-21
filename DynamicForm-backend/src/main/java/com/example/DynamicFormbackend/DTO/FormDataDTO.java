package com.example.DynamicFormbackend.DTO;

import com.example.DynamicFormbackend.Model.Form;
import com.example.DynamicFormbackend.Model.User;
import lombok.Data;

@Data
public class FormDataDTO {
    private Long id;

    private String jsonData;

    private Long userId;

    private Long formId;



}
