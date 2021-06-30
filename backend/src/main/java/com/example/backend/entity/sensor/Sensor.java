package com.example.backend.entity.sensor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Sensor {

    @Id
    @GeneratedValue
    private int sensorid;
    private Date addedDate;
    private String location;

    public Sensor() { }

    public Sensor(int sensorid, Date addedDate, String location) {
        this.sensorid = sensorid;
        this.addedDate = addedDate;
        this.location = location;
    }

    public int getSensorid() {
        return sensorid;
    }

    public void setSensorid(int sensorid) {
        this.sensorid = sensorid;
    }

    public Date getAddedDate() {
        return addedDate;
    }

    public void setAddedDate(Date addedDate) {
        this.addedDate = addedDate;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
