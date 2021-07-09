package com.example.backend.service.user;

import com.example.backend.entity.user.StaffUser;
import com.example.backend.repository.user.StaffUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffUserService implements StaffUserServiceInterface{


    @Autowired
    private StaffUserRepository staffUserRepository;

    @Override
    public StaffUser saveUser(StaffUser staffUser){
        if(signIn(staffUser.getUsername(), staffUser.getPassword()).equals("Okay")){
            System.out.println("Okay");
            return staffUserRepository.save(staffUser);
        } else{
            System.out.println("Unsuccessful");
            return null;
        }
    }
    @Override
    public String signIn(String username, String password){
        StaffUser k = staffUserRepository.findByUsernameAndPassword(username,password);
        if(k!=null){
            return "Okay";
        } else{
            return "Can't";
        }
    }

    public List<StaffUser> getNotificationDetails(String type){
        return staffUserRepository.findAllByNotificationType(type);
    }
}
