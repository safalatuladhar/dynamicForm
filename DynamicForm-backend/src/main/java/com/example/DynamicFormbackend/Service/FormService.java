package com.example.DynamicFormbackend.Service;

import com.example.DynamicFormbackend.DTO.FormComponentDTO;
import com.example.DynamicFormbackend.DTO.FormDTO;
import com.example.DynamicFormbackend.DTO.OptionDTO;
import com.example.DynamicFormbackend.Model.Form;
import com.example.DynamicFormbackend.Model.FormComponent;
import com.example.DynamicFormbackend.Model.Option;
import com.example.DynamicFormbackend.Model.User;
import com.example.DynamicFormbackend.Repository.FormRepository;
import com.example.DynamicFormbackend.Repository.OptionRepository;
import com.example.DynamicFormbackend.Repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class FormService {
    @Autowired
    private FormRepository formRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private FormComponentService formComponentService;
    @Autowired
    private OptionRepository optionRepository;

    @Autowired
    private AddableFieldService addableFieldService;

    public List<Form> getAllForm() {
        return formRepository.findAll();
    }

    public Form getForm(long id) {
        Form form = formRepository.findById(id).orElseThrow();
        List<FormComponent> components = formComponentService.getFormComponentByFormId(id);
        form.setFormComponents(components);
        return form;
    }

    public Form createForm(Form form, User user) {
        form.setUser(user);
        return formRepository.save(form);
    }

    public Form createFormAndComponents(FormDTO formDTO) {
        User user = userRepository.getReferenceById(formDTO.getUserId());
        Form form = this.createForm(new Form(formDTO), user);
        for (FormComponentDTO formComponentDTO : formDTO.getFormComponents()) {
            FormComponent formComponent = this.formComponentService.createFormComponent(new FormComponent(formComponentDTO, form));
            if (formComponentDTO.getOptions() != null) {
                List<Option> options = new ArrayList<>();
                for (OptionDTO optionDTO : formComponentDTO.getOptions()) {
                    options.add(new Option(optionDTO, formComponent));
                }
                this.optionRepository.saveAll(options);
            }
        }
        return form;
    }

    public void deleteForm(long id) {
        formRepository.deleteById(id);
    }

    public void updateFormAndComponent(FormDTO formDTO, long id) {
//        formRepository
        Form form = formRepository.findById(id).orElseThrow();
        form.setName(formDTO.getName());
        form = formRepository.save(form);
        formComponentService.updateFormComponent(formDTO, form, id);
    }

    public void updateAddableFieldAndComponent(FormComponentDTO formComponentDTO, long id){
        Form form = formRepository.findById(id).orElseThrow();
        form.setName(formComponentDTO.getName());
        form = formRepository.save(form);
        addableFieldService.updateAddableField(formComponentDTO, new FormComponent(), id);
    }
}
