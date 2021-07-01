package com.example.backend.entity.reading;


import javax.persistence.*;
import java.util.Date;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Reading {

    @Id
    @GeneratedValue
    private int id;
    private Date date;
    private int sensorid;
    private boolean alert = false;



    public Reading(int id, Date date, int sensor_id, boolean alert) {
        this.id = id;
        this.date = date;
        this.sensorid = sensorid;
        this.alert = alert;
    }

    //default no-args constructor
    public Reading(){ }


    //getters and setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getSensorid() {
        return sensorid;
    }

    public void setSensorid(int sensorid) {
        this.sensorid = sensorid;
    }

    public boolean isAlert() { return alert; }

    public void setAlert(boolean alert) { this.alert = alert; }
}
