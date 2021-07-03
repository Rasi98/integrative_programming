package com.example.backend.entity.user;

import javax.persistence.*;

@Entity
@Table(name = "StaffUser")
public class StaffUser extends User {

    private String position;

    public StaffUser() {
    }

    public StaffUser(int userId, String username, String firstname, String lastname, String email, String telNo, String position, String notificationType, String password) {
        super(userId, username, firstname, lastname, email, telNo, notificationType, password);
        this.position = position;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }
}
