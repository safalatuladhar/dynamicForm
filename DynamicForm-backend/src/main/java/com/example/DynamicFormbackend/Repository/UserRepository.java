package com.example.DynamicFormbackend.Repository;

import com.example.DynamicFormbackend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
