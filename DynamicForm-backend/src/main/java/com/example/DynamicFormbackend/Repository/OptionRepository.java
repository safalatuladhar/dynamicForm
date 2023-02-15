package com.example.DynamicFormbackend.Repository;

import com.example.DynamicFormbackend.Model.Option;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface OptionRepository extends JpaRepository<Option,Long> {
    Set<Option> findOptionByFormComponentId(Long id);

}
