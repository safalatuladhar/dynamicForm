package com.example.DynamicFormbackend.Service;

import com.example.DynamicFormbackend.Model.User;
import com.example.DynamicFormbackend.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AuthService {
    private final UserRepository userRepository;

    public User getUserByEmail(String email){
        return userRepository.findByEmail(email);
    }

}