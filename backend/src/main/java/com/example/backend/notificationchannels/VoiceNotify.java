package com.example.backend.notificationchannels;

public class VoiceNotify {
    private String telephoneNumber,sensorid;
    private static VoiceNotify instance = new VoiceNotify();

    public static VoiceNotify getInstance(){
        return instance;
    }

    public void sendVoice(String telephoneNumber, String sensorid){
        //add make a voice call logic - Lakshan
        System.out.println("Voice to: " + telephoneNumber + " Sensor ID: " + sensorid);
    }
}


