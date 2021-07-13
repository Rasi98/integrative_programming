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
        System.out.println(staffUser);
        String k = check(staffUser.getUsername(), staffUser.getPassword());
        if(k.equals("Okay")){
            System.out.println(signIn(staffUser.getUsername(), staffUser.getPassword()));
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
            return String.valueOf(k.getUserId());
        } else{
            return "Okay";
        }
    }

    @Override
    public String check(String username, String password){
        StaffUser k = staffUserRepository.findByUsernameAndPassword(username,password);
        if(k!=null){
            return "can't";
        } else{
            return "Okay";
        }
    }
    @Override
    public List<StaffUser> getNotificationDetails(String type){
        return staffUserRepository.findAllByNotificationType(type);
    }

    @Override
    public StaffUser getDetails(Integer k) {
        return staffUserRepository.findByUserId(k);
    }

    @Override
    public StaffUser updateDetails(StaffUser staffUser) {

        StaffUser existing = staffUserRepository.findByUserId(staffUser.getUserId());
        existing.setUsername(staffUser.getUsername());
        existing.setPassword(staffUser.getPassword());
        existing.setEmail(staffUser.getEmail());
        existing.setFirstname(staffUser.getFirstname());
        existing.setLastname(staffUser.getLastname());
        existing.setPosition(staffUser.getPosition());
        existing.setNotificationType(staffUser.getNotificationType());
        existing.setTelNo(staffUser.getTelNo());
        return staffUserRepository.save(existing);
    }
}
