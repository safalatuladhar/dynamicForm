package com.example.DynamicFormbackend.Service;


import com.example.DynamicFormbackend.DTO.FormComponentDTO;
import com.example.DynamicFormbackend.DTO.FormDTO;
import com.example.DynamicFormbackend.DTO.OptionDTO;
import com.example.DynamicFormbackend.Model.Form;
import com.example.DynamicFormbackend.Model.FormComponent;
import com.example.DynamicFormbackend.Model.Option;
import com.example.DynamicFormbackend.Repository.FormComponentRepository;
import com.example.DynamicFormbackend.Repository.OptionRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@Transactional
public class FormComponentService {
    @Autowired
    private FormComponentRepository formComponentRepository;
    @Autowired
    private OptionRepository optionRepository;

    public List<FormComponent> getAllFormComponent() {
        return formComponentRepository.findAll();
    }

    public List<FormComponent> getFormComponentByFormId(long id) {
//        return formComponentRepository.findFormComponentByFormIdSorted(id);
        return formComponentRepository.findFormComponentByFormId(id, Sort.by(Sort.Direction.ASC, "orders"));
    }



    public FormComponent createFormComponent(FormComponent formComponent) {
        return formComponentRepository.save(formComponent);
    }

    public void updateFormComponent(FormDTO formDTO, Form form, long id) {
        formComponentRepository.deleteByFormId(id);
        for (FormComponentDTO formComponentDTO : formDTO.getFormComponents()) {
            FormComponent formComponent = this.createFormComponent(new FormComponent(formComponentDTO, form));
            if (formComponentDTO.getOptions() != null) {
                List<Option> options = new ArrayList<>();
                for (OptionDTO optionDTO : formComponentDTO.getOptions()) {
                    options.add(new Option(optionDTO, formComponent));
                }
                this.optionRepository.saveAll(options);
            }
        }
    }
}
