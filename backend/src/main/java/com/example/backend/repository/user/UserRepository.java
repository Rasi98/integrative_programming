package com.example.backend.repository.user;

import com.example.backend.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface UserRepository extends JpaRepository<User, Integer> {

}
