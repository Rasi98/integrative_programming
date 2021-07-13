package com.example.backend.notificationchannels;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Call;
import com.twilio.type.PhoneNumber;

import java.net.URI;
import java.net.URISyntaxException;

public class VoiceNotify {
    private static VoiceNotify instance = new VoiceNotify();
    private final static String ACCOUNT_SID = TwilioConfig.getAccountSid();
    private final static String AUTH_TOKEN = TwilioConfig.getAuthToken();

    static {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
    }

    public static VoiceNotify getInstance() {
        return instance;
    }

    public void sendVoice(String telephoneNumber, String sensorid) {
        try {
            Call.creator(new PhoneNumber(telephoneNumber), new PhoneNumber(TwilioConfig.getTrialNo()),
                    new URI("http://demo.twilio.com/docs/voice.xml")).create();
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
        System.out.println("Voice to: " + telephoneNumber + " Sensor ID: " + sensorid);
    }
}


