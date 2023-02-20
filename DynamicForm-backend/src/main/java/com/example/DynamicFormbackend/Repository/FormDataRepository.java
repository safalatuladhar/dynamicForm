package com.example.DynamicFormbackend.Repository;

import com.example.DynamicFormbackend.Model.FormComponent;
import com.example.DynamicFormbackend.Model.FormData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FormDataRepository extends JpaRepository<FormData, Long> {

    List<FormData> findFormDataByFormId(Long id);
}
