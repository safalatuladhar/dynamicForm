package com.example.DynamicFormbackend.Controller;


import com.example.DynamicFormbackend.DTO.FormDTO;
import com.example.DynamicFormbackend.Model.Form;
import com.example.DynamicFormbackend.Service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", exposedHeaders = "token")
public class FormController {
    @Autowired
    private FormService formService;

    @GetMapping("/form")
    public ResponseEntity<List<Form>> getAllFormComponent() {
        return ResponseEntity.ok().body(formService.getAllForm());
    }

    @GetMapping("/form/{id}")
    public ResponseEntity<Form> getForm(@PathVariable long id) {
        return ResponseEntity.ok().body(formService.getForm(id));
    }

    @PostMapping("/form")
    public ResponseEntity<Form> createNewForm(@RequestBody FormDTO formDTO) {
        return ResponseEntity.ok().body(formService.createFormAndComponents(formDTO));

    }

    @DeleteMapping("/form/{id}")
    public HttpStatus deleteForm(@PathVariable long id) {
        formService.deleteForm(id);
        return HttpStatus.OK;
    }

    @PutMapping("/form/{id}")
    public HttpStatus updateForm(@RequestBody FormDTO formDTO, @PathVariable long id) {
        formService.updateFormAndComponent(formDTO, id);
        formService.updateAddableFieldAndComponent(formDTO,id);
        return HttpStatus.OK;
    }
}
