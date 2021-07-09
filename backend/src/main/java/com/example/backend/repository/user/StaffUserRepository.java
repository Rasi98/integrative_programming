package com.example.backend.repository.user;

import com.example.backend.entity.user.StaffUser;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StaffUserRepository extends UserRepository {
    StaffUser findByUsernameAndPassword(String username, String password);

    //StaffUser findByNotification_type(String type);

    //List<StaffUser> findByAllNotification_type(String type);

   // List<StaffUser> findAllByNotification_type(String type);

    List<StaffUser> findAllByNotificationType(String type);
}
