package com.example.backend.entity.reading;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name="TemperatureReading")
public class TemperatureReading extends Reading {

    @Column(name="temperaturevalue")
    private float temperaturevalue;

    //default no-args constructor for hibernate to create instances of class
    private TemperatureReading(){ }

    //constructor with parameters
    public TemperatureReading(int id, Date date, int sensor_id, float temperaturevalue , boolean alert) {
        super(id, date, sensor_id , alert);
        this.temperaturevalue = temperaturevalue;
    }

    //Temperature value getters
    public float getTemperaturevalue() {
        return temperaturevalue;
    }

    //Temperature value setters
    public void setTemperaturevalue(float temperaturevalue) {
        this.temperaturevalue = temperaturevalue;
    }
}
