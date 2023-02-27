package com.example.DynamicFormbackend.Repository;

import com.example.DynamicFormbackend.Model.AddableField;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface AddableFieldRepository extends JpaRepository<AddableField, Long > {
    List<AddableField> findAddableFieldByFormId(Long id, Sort sort);

    long deleteAddableFieldByFormId(Long id);


}
