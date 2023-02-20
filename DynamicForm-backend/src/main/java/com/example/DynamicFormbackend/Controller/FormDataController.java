package com.example.DynamicFormbackend.Controller;

import com.example.DynamicFormbackend.Model.FormData;
import com.example.DynamicFormbackend.Service.FormDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController

public class FormDataController {
    @Autowired
    private final FormDataService formDataService;

    public FormDataController(FormDataService formDataService) {
        this.formDataService = formDataService;
    }

    @PostMapping("/formData")
    public ResponseEntity<FormData> saveFormData(@RequestBody FormData formData) {
        return ResponseEntity.ok().body(formDataService.saveData(formData));
    }

//    @GetMapping("/formData/{id}")
//    public ResponseEntity<List<FormData>> getFormData(@PathVariable long id) {
//        return ResponseEntity.ok().body(formDataService.getFormDataByFormId(id));
//    }




}
