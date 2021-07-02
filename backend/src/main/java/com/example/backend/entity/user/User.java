package com.example.backend.entity.user;

import javax.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class User {

    @Id
    @GeneratedValue
    private int userId;
    private String username;
    private String firstname;
    private String lastname;
    private String email;
    private String telNo;
    private String notificationType;

    public User() {
    }

    public User(int userId, String username, String firstname, String lastname, String email, String telNo, String notificationType) {
        this.userId = userId;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.telNo = telNo;
        this.notificationType = notificationType;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelNo() {
        return telNo;
    }

    public void setTelNo(String telNo) {
        this.telNo = telNo;
    }

    public String getNotificationType() {
        return notificationType;
    }

    public void setNotificationType(String notificationType) {
        this.notificationType = notificationType;
    }
}
