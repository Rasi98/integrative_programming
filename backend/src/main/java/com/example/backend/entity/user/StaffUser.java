package com.example.backend.entity.user;

import javax.persistence.*;

@Entity
@Table(name = "User")
public class StaffUser extends User {

    private String position;

    public StaffUser() {
    }

    public StaffUser(int userId, String username, String firstname, String lastname, String email, String telNo, String position, String notificationType) {
        super(userId, username, firstname, lastname, email, telNo, notificationType);
        this.position = position;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }
}
