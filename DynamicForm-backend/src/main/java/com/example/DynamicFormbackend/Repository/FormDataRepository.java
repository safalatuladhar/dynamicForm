package com.example.DynamicFormbackend.Repository;

import com.example.DynamicFormbackend.Model.Form;
import com.example.DynamicFormbackend.Model.FormComponent;
import com.example.DynamicFormbackend.Model.FormData;
import com.example.DynamicFormbackend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface FormDataRepository extends JpaRepository<FormData, Long> {

//     User findByUser(Long userId);
//
//     Form findByFormName(Long formId);
}
