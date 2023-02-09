package com.example.DynamicFormbackend.Service;

import com.example.DynamicFormbackend.DTO.FormDetailDTO;
import com.example.DynamicFormbackend.DTO.FromComponentDTO;
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
    public List<Form> getAllForm(){
        return formRepository.findAll();
    }

    public Form createForm(Form form, User user){
        form.setUser(user);
        return formRepository.save(form);
    }
    public void createFormAndComponents(FormDetailDTO formDetailDTO){
        User user = userRepository.getReferenceById(formDetailDTO.getFormDTO().getUser_id());
        Form form = this.createForm(new Form(formDetailDTO.getFormDTO()),user);
        for (FromComponentDTO formComponentDTO:formDetailDTO.getFromComponentDTO()){
            FormComponent formComponent = this.formComponentService.createFormComponent(new FormComponent(formComponentDTO,form));
            if(!formComponentDTO.getOptions().isEmpty()){
                List<Option> options = new ArrayList<>();
                for(OptionDTO optionDTO: formComponentDTO.getOptions()){
                    options.add(new Option(optionDTO,formComponent));
                }
                this.optionRepository.saveAll(options);
            }
        }

    }

    public void deleteForm(long id) {
        formRepository.deleteById(id);
    }

    public void updateFormAndComponent(FormDetailDTO formDetailDTO, long id) {
//        formRepository
        Form form = formRepository.findById(id).orElseThrow();
        form.setName(formDetailDTO.getFormDTO().getName());
        form = formRepository.save(form);
        formComponentService.updateFormComponent(formDetailDTO,form,id);
    }
}
