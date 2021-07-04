package com.example.backend.notificationchannels;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

public class SmsNotify {
    private String telephoneNumber,sensorid;
    private static SmsNotify instance = new SmsNotify();
    private final static String ACCOUNT_SID = "AC1cb1b3d7509bc80e32acc49e991b8dbc";
    private final static String AUTH_TOKEN = "114ae0fcc8f75a61ff9d9887f6b6249b";

    static {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
    }
    public static SmsNotify getInstance(){
        return instance;
    }


    public void sendSMS(String telephoneNumber, String sensorid){
        //add send sms logic - Lakshan
        Message.creator(new PhoneNumber(telephoneNumber), new PhoneNumber("94703135478"),
                "Check the status of sensorId:"+sensorid).create();

        System.out.println("SMS to: " + telephoneNumber + " Sensor ID: " + sensorid);
    }
}

