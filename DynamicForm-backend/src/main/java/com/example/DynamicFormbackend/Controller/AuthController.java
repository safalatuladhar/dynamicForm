package com.example.DynamicFormbackend.Controller;

import com.example.DynamicFormbackend.DTO.AuthResponseDTO;
import com.example.DynamicFormbackend.Model.User;
import com.example.DynamicFormbackend.Service.AuthService;
import com.example.DynamicFormbackend.config.JWTUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final JWTUtils jwtUtils;
    private final AuthService authService;

    @PostMapping("login")
    public ResponseEntity<AuthResponseDTO> authenticate(@RequestBody User user) {
        User user1 = authService.getUserByEmail(user.getEmail());
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
        if (user1 != null) {
            String token = jwtUtils.generateToken(user.getEmail());
            return new ResponseEntity<>(new AuthResponseDTO(token, user1.getId(),user1.getEmail()), HttpStatus.OK);
        }
        return null;
    }
}
