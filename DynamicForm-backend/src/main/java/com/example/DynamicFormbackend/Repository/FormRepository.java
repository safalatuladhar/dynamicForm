package com.example.DynamicFormbackend.Repository;

import com.example.DynamicFormbackend.Model.Form;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormRepository extends JpaRepository<Form,Long> {
}
