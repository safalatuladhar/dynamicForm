package com.example.DynamicFormbackend.Service;

import com.example.DynamicFormbackend.Model.Form;
import com.example.DynamicFormbackend.Model.FormComponent;
import com.example.DynamicFormbackend.Model.FormData;
import com.example.DynamicFormbackend.Repository.FormComponentRepository;
import com.example.DynamicFormbackend.Repository.FormDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormDataService {

    @Autowired
    private FormDataRepository formDataRepository;


    public FormDataService(FormDataRepository formDataRepository){
        this.formDataRepository = formDataRepository;
    }

//    public List<FormData> getFormDataByFormId(long id) {
//        return formDataRepository.findFormDataByFormId(id);
//    }

    public FormData saveData(FormData formData){
        return formDataRepository.save(formData);
    }

}
