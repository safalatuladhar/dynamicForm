package com.example.DynamicFormbackend.Model;

import com.example.DynamicFormbackend.DTO.FormDataDTO;
import com.example.DynamicFormbackend.DTO.OptionDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.List;


@Entity
@Data
@NoArgsConstructor
@Table(name = "form_data")

public class FormData {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NonNull
    private String jsonData;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_data_id", referencedColumnName = "id")
    @NonNull
    private User user;


    @NonNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "form_data_id", referencedColumnName = "id")
    private Form form;


}
