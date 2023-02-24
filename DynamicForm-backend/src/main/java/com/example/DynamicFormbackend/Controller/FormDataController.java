package com.example.DynamicFormbackend.Controller;

import com.example.DynamicFormbackend.DTO.FormDataDTO;
import com.example.DynamicFormbackend.Service.FormDataService;
import com.example.DynamicFormbackend.storage.StorageService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@RestController

public class FormDataController {
    private final FormDataService formDataService;
    private final StorageService storageService;
    private final ModelMapper modelMapper;

    @Autowired
    public FormDataController(FormDataService formDataService, StorageService storageService, ModelMapper modelMapper) {
        this.formDataService = formDataService;
        this.storageService = storageService;
        this.modelMapper = modelMapper;
    }
    @PostMapping("/formData")
    public ResponseEntity<FormDataDTO> saveFormData(@RequestPart("formDataDTO") FormDataDTO formDataDTO, @RequestPart(value = "file", required = false) List <MultipartFile> files) {
        if(!(files ==null)){
            for (MultipartFile file:files) {
                storageService.store(file);
            }

        }
        return ResponseEntity.ok().body(formDataService.saveData(formDataDTO));
    }

}
