package com.example.backend.ManageAlerts;

import com.example.backend.notificationchannels.SmsNotify;

public class AlertObserverSms extends AlertObserver{

    private String phoneNumber;

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
