package com.example.backend.ManageAlerts;

import com.example.backend.notificationchannels.EmailNotify;

public class AlertObserverEmail extends AlertObserver{
    private String emailAddress;

    public AlertObserverEmail(String emailAddress){
        //this.alertSubject = alertSubject;
        this.alertSubject.attach(this);
        this.emailAddress = emailAddress;
    }

    @Override
    public void update() {
       // EmailNotify emailNotify = EmailNotify.getInstance();
        EmailNotify.getInstance().sendEmail(emailAddress,alertSubject.getSensorid());
    }
}
