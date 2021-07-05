package com.example.backend.service.user;

import com.example.backend.entity.user.StaffUser;

public interface StaffUserServiceInterface {
    public StaffUser saveUser(StaffUser staffUser);
    public String signIn(String username, String password);
}
