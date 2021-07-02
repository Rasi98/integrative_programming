package com.example.backend.ManageAlerts;

import com.example.backend.notificationchannels.VoiceNotify;

public class AlertObserverCall extends AlertObserver{
    private String phoneNumber;

    public AlertObserverCall(AlertSubject alertSubject, String phoneNumber){
        this.alertSubject = alertSubject;
        this.alertSubject.attach(this);
        this.phoneNumber = phoneNumber;
    }

    @Override
    public void update() {
        //VoiceNotify voiceNotify = VoiceNotify.getInstance();
        VoiceNotify.getInstance().sendVoice(phoneNumber, alertSubject.getSensorid());
    }
}
