package com.example.DynamicFormbackend.Repository;

import com.example.DynamicFormbackend.Model.FormComponent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;

public interface FormComponentRepository extends JpaRepository<FormComponent,Long> {
    List<FormComponent> findFormComponentByFormId(Long id);

//    @Modifying
    long deleteByFormId(Long id);
}
