package com.example.backend.repository.user;

import com.example.backend.entity.user.StaffUser;
import org.springframework.stereotype.Repository;

@Repository
public interface StaffUserRepository extends UserRepository {
    StaffUser findByUsernameAndPassword(String username, String password);
}
