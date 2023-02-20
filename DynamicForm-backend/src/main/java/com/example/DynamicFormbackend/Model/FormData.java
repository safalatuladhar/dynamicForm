package com.example.DynamicFormbackend.Model;

import com.example.DynamicFormbackend.DTO.FormDataDTO;
import com.example.DynamicFormbackend.DTO.OptionDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "form_data")

public class FormData {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String jsonData;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_data_id", referencedColumnName = "id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "form_data_id", referencedColumnName = "id")
    private Form form;


}
