package com.example.backend.service.user;

import com.example.backend.repository.user.StaffUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StaffUserService {

    @Autowired
    private StaffUserRepository staffUserRepository;
}
