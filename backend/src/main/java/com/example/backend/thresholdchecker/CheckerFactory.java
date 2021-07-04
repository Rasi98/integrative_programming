package com.example.backend.thresholdchecker;

public class CheckerFactory {

    public Checker getRelevantChecker(String sensorType){
        if (sensorType.equals(null)) {
            return null;
        }
        if (sensorType.equals("TempreatureSensor")) {

            return new TempreatureSensorChecker();
        }
        return null;
    }
}
