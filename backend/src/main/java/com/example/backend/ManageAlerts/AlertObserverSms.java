//package com.example.backend.ManageAlerts;
//
//import com.example.backend.notificationchannels.SmsNotify;
//
//public class AlertObserverSms extends AlertObserver{
//
//
//    private final String phoneNumber;
//
//    public AlertObserverSms(String phoneNumber){
//        //AlertObserver.alertSubject = alertSubject;
//        AlertObserver.alertSubject.attach(this);
//        this.phoneNumber = phoneNumber;
//    }
//
//    @Override
//    public void update() {
//        SmsNotify.getInstance().sendSMS(phoneNumber,alertSubject.getSensorid());
//    }
//}