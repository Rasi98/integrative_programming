package com.example.backend.notificationchannels;

public class SmsNotify {
    private String telephoneNumber,sensorid;
    private static SmsNotify instance = new SmsNotify();

    public static SmsNotify getInstance(){
        return instance;
    }

    public void sendSMS(String telephoneNumber, String sensorid){
        //add send sms logic - Lakshan
        System.out.println("SMS to: " + telephoneNumber + " Sensor ID: " + sensorid);
    }
}

