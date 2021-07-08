package com.example.backend.ManageAlerts;

import com.example.backend.notificationchannels.EmailNotify;

public class AlertObserverSms extends AlertObserver{

    private String phoneNumber;
    private com.example.backend.notificationchannels.SmsNotify SmsNotify;

    public AlertObserverSms(AlertSubject alertSubject, String phoneNumber){
        this.alertSubject = alertSubject;
        this.alertSubject.attach(this);
        this.phoneNumber = phoneNumber;
    }

    @Override
    public void update() {
        SmsNotify.getInstance().sendSMS(phoneNumber,alertSubject.getSensorid());
    }
}
