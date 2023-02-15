package com.example.DynamicFormbackend.Controller;


import com.example.DynamicFormbackend.Model.FormComponent;
import com.example.DynamicFormbackend.Service.FormComponentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FormComponentController {
    @Autowired
    FormComponentService formComponentService;

    @GetMapping("/formComponent/{id}")

    public ResponseEntity<List<FormComponent>> getAllFormComponent(@PathVariable long id){
        return ResponseEntity.ok().body(formComponentService.getFormComponentByFormId(id));
    }
}
