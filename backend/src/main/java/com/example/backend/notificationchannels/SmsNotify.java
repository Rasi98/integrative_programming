package com.example.backend.notificationchannels;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

public class SmsNotify {
    private String telephoneNumber,sensorid;
    private static final SmsNotify instance = new SmsNotify();
    private static final String ACCOUNT_SID=TwilioConfig.getAccountSid();
    private static final String AUTH_ID=TwilioConfig.getAuthToken();

    static {
        Twilio.init(ACCOUNT_SID, AUTH_ID);
    }

    public static SmsNotify getInstance(){
        return instance;
    }

    public void sendSMS(String telephoneNumber, String sensorid){
        Message.creator(new PhoneNumber(telephoneNumber), new PhoneNumber(TwilioConfig.getTrialNo()),
                "Message from Spring Boot Application").create();
    }
}