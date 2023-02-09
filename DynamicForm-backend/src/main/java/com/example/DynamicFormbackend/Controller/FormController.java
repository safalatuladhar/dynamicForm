package com.example.DynamicFormbackend.Controller;


import com.example.DynamicFormbackend.DTO.FormDetailDTO;
import com.example.DynamicFormbackend.Model.Form;
import com.example.DynamicFormbackend.Service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FormController {
    @Autowired
    private FormService formService;

    @GetMapping("/form")
    public ResponseEntity<List<Form>> getAllFormComponent(){
        return ResponseEntity.ok().body(formService.getAllForm());
    }
    @PostMapping("/form")
    public HttpStatus createNewForm(@RequestBody FormDetailDTO formDetailDTO){
        formService.createFormAndComponents(formDetailDTO);
        return HttpStatus.OK;
    }
    @DeleteMapping("/form/{id}")
    public HttpStatus deleteForm(@PathVariable long id)
    {
        formService.deleteForm(id);
        return HttpStatus.OK;
    }
    @PutMapping("/form/{id}")
    public HttpStatus updateForm(@RequestBody FormDetailDTO formDetailDTO,@PathVariable long id)
    {
        formService.updateFormAndComponent(formDetailDTO,id);
        return HttpStatus.OK;
    }
}
