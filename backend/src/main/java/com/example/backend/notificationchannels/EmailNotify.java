package com.example.backend.notificationchannels;

public class EmailNotify {
    private String emailAddress,sensorid;
    private static EmailNotify instance = new EmailNotify();

    public static EmailNotify getInstance(){
        return instance;
    }

    public void sendEmail(String emailAddress, String sensorid){
        //add the send email logic - Thilina
        System.out.println("Email to: " + emailAddress + " Sensor ID: " + sensorid);
    }
}
