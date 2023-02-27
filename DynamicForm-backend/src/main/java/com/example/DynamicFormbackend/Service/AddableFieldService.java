package com.example.DynamicFormbackend.Service;

import com.example.DynamicFormbackend.DTO.AddableFieldDTO;
import com.example.DynamicFormbackend.DTO.FormComponentDTO;
import com.example.DynamicFormbackend.DTO.FormDTO;
import com.example.DynamicFormbackend.DTO.OptionDTO;
import com.example.DynamicFormbackend.Model.AddableField;
import com.example.DynamicFormbackend.Model.Form;
import com.example.DynamicFormbackend.Model.FormComponent;
import com.example.DynamicFormbackend.Model.Option;
import com.example.DynamicFormbackend.Repository.AddableFieldRepository;
import com.example.DynamicFormbackend.Repository.OptionRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class AddableFieldService {

    @Autowired
    private AddableFieldRepository addableFieldRepository;

    @Autowired
    private OptionRepository optionRepository;

    public List<AddableField> getAllAddableField() {
        return addableFieldRepository.findAll();
    }

    public List<AddableField> getAddableFieldById(long id) {

        return addableFieldRepository.findAddableFieldByFormId(id, Sort.by(Sort.Direction.ASC, "orders"));
    }

    public AddableField createAddableField(AddableField addableField) {
        return addableFieldRepository.save(addableField);
    }



    public void updateAddableField(FormDTO formDTO, Form form, long id) {
        addableFieldRepository.deleteAddableFieldByFormId(id);
        for (AddableFieldDTO addableFieldDTO : formDTO.getAddableFields()) {
            AddableField addableField = this.createAddableField(new AddableField(addableFieldDTO, form));
            if (addableFieldDTO.getOptions() != null) {
                List<Option> options = new ArrayList<>();
                for (OptionDTO optionDTO : addableFieldDTO.getOptions()) {
                    options.add(new Option(optionDTO, addableField));
                }
                this.optionRepository.saveAll(options);
            }
        }
    }
}
