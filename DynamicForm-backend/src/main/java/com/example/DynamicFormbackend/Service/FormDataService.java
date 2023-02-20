package com.example.DynamicFormbackend.Service;

import com.example.DynamicFormbackend.DTO.FormDataDTO;
import com.example.DynamicFormbackend.Model.Form;
import com.example.DynamicFormbackend.Model.FormComponent;
import com.example.DynamicFormbackend.Model.FormData;
import com.example.DynamicFormbackend.Repository.FormComponentRepository;
import com.example.DynamicFormbackend.Repository.FormDataRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormDataService {

    @Autowired
    private FormDataRepository formDataRepository;

    @Autowired
    private ModelMapper modelMapper;


    public FormDataService(FormDataRepository formDataRepository){
        this.formDataRepository = formDataRepository;
    }


    public FormDataDTO saveData(FormDataDTO formDataDTO){
        FormData formData = modelMapper.map(formDataDTO, FormData.class);
        FormData newFormData = formDataRepository.save(formData);
        return modelMapper.map(newFormData, FormDataDTO.class);
    }

}
