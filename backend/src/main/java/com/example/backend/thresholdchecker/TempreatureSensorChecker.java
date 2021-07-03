package com.example.backend.thresholdchecker;

import com.example.backend.entity.reading.Reading;
import com.example.backend.entity.reading.TemperatureReading;

public class TempreatureSensorChecker implements Checker {

    private float tempreatureValue,thresholdValue;

    @Override
    public boolean thresholdChecker(float tempreatureValue , float thresholdValue) {

        this.tempreatureValue=tempreatureValue;
        this.thresholdValue = thresholdValue;

        if(tempreatureValue>thresholdValue){
            return true;
        }
        else{
            return false;
        }

    }
}
