package com.example.DynamicFormbackend.Controller;

import com.example.DynamicFormbackend.DTO.FormDataDTO;
import com.example.DynamicFormbackend.Model.FormData;
import com.example.DynamicFormbackend.Service.FormDataService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController

public class FormDataController {
    @Autowired
    private final FormDataService formDataService;

    @Autowired
    private ModelMapper modelMapper;

    public FormDataController(FormDataService formDataService) {
        this.formDataService = formDataService;
    }

    @PostMapping("/formData")
    public ResponseEntity<FormDataDTO> saveFormData(@RequestBody FormDataDTO formDataDTO) {

        return ResponseEntity.ok().body(formDataService.saveData(formDataDTO));

    }

}
