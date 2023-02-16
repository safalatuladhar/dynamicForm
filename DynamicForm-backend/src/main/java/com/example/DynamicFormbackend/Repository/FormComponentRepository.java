package com.example.DynamicFormbackend.Repository;

import com.example.DynamicFormbackend.Model.FormComponent;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FormComponentRepository extends JpaRepository<FormComponent,Long> {
    List<FormComponent> findFormComponentByFormId(Long id, Sort sort);

//    @Query("select * from form_component f join options o on f.id=o.form_component_id where f.form_id=?1 order by f.orders,o.orders")
//    List<FormComponent> findFormComponentByFormIdSorted(long id);

//    @Modifying
    long deleteByFormId(Long id);
}
