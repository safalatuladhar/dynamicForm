package com.example.DynamicFormbackend.Controller;

import com.example.DynamicFormbackend.DTO.AddableFieldDTO;
import com.example.DynamicFormbackend.DTO.FormDTO;
import com.example.DynamicFormbackend.Model.AddableField;
import com.example.DynamicFormbackend.Model.Form;
import com.example.DynamicFormbackend.Service.AddableFieldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AddableFieldController {
    @Autowired
   private AddableFieldService addableFieldService;


    @GetMapping("/addableField/{id}")
    public ResponseEntity<List<AddableField>> getAddableFieldById(@PathVariable long id){
        return ResponseEntity.ok().body(addableFieldService.getAddableFieldById(id));
    }

    @PostMapping("/addableField")
    public ResponseEntity<AddableField> createAddableField(@RequestBody AddableField addableField) {
        return ResponseEntity.ok().body(addableFieldService.createAddableField(addableField));

    }

}
