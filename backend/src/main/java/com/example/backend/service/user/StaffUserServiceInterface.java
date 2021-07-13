package com.example.backend.service.user;

import com.example.backend.entity.user.StaffUser;

import java.util.List;

public interface StaffUserServiceInterface {

    public StaffUser saveUser(StaffUser staffUser);
    public String signIn(String username, String password);
    public List<StaffUser> getNotificationDetails(String type);
    public String check(String username, String password);
    public StaffUser getDetails(Integer k);
    public StaffUser updateDetails(StaffUser staffUser);
}
