package com.example.DynamicFormbackend.DTO;

import com.example.DynamicFormbackend.Model.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponseDTO {
    private String token;
    private long userId;
    private String email;
}
