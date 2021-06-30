package com.example.backend.entity.sensor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name="TemperatureSensor")
public class TempreatureSensor extends Sensor {

    @Column(name="thresholdtemp")
    private float thresholdtemp;

    public TempreatureSensor() { }

    public TempreatureSensor(int sensorid, Date addedDate, String location, float thresholdtemp) {
        super(sensorid, addedDate,  location);
        this.thresholdtemp = thresholdtemp;
    }

    public float getThresholdtemp() {
        return thresholdtemp;
    }

    public void setThresholdtemp(float thresholdtemp) {
        this.thresholdtemp = thresholdtemp;
    }
}
