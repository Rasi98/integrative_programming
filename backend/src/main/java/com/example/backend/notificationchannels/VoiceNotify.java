package com.example.backend.notificationchannels;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Call;
import com.twilio.type.PhoneNumber;

import java.net.URI;
import java.net.URISyntaxException;

public class VoiceNotify {
    private String telephoneNumber,sensorid;
    private static VoiceNotify instance = new VoiceNotify();
    private final static String ACCOUNT_SID = "AC1cb1b3d7509bc80e32acc49e991b8dbc";
    private final static String AUTH_TOKEN = "114ae0fcc8f75a61ff9d9887f6b6249b";

    static {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
    }

    public static VoiceNotify getInstance(){
        return instance;
    }

    public void sendVoice(String telephoneNumber, String sensorid){
        //add make a voice call logic - Lakshan
        try {
            Call.creator(new PhoneNumber("<to-number>"), new PhoneNumber("<from-number>"),
                    new URI("http://demo.twilio.com/docs/voice.xml")).create();
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
        System.out.println("Voice to: " + telephoneNumber + " Sensor ID: " + sensorid);
    }
}


