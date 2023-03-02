package com.example.DynamicFormbackend.Controller;


import com.example.DynamicFormbackend.DTO.FormComponentDTO;
import com.example.DynamicFormbackend.DTO.FormDTO;
import com.example.DynamicFormbackend.Model.FormComponent;
import com.example.DynamicFormbackend.Service.FormComponentService;
import com.example.DynamicFormbackend.Service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FormComponentController {
    @Autowired
   private FormComponentService formComponentService;

    @Autowired
    private FormService formService;

    @GetMapping("/formComponent/{id}")

    public ResponseEntity<List<FormComponent>> getAllFormComponent(@PathVariable long id){
        return ResponseEntity.ok().body(formComponentService.getFormComponentByFormId(id));
    }


}
