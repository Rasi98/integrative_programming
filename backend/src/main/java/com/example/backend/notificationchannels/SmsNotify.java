package com.example.backend.notificationchannels;


import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

public class SmsNotify {
    private final static String ACCOUNT_SID = TwilioConfig.getAccountSid();
    private final static String AUTH_ID = TwilioConfig.getAuthToken();
    private static SmsNotify instance = new SmsNotify();

    public static SmsNotify getInstance(){
        return instance;
    }



    static {
        Twilio.init(ACCOUNT_SID, AUTH_ID);
    }


    public void sendSMS(String telephoneNumber, String sensorid) {
        Message message=Message.creator(
                new PhoneNumber(telephoneNumber),
                new PhoneNumber(TwilioConfig.getTrialNo()),
                "Check sensor:"+sensorid
        ).create();
    }
}

