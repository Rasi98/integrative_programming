package com.example.backend.ManageAlerts;

import com.example.backend.notificationchannels.EmailNotify;

import javax.mail.MessagingException;
import java.io.IOException;

public class AlertObserverEmail extends AlertObserver{
    private String emailAddress;

    public AlertObserverEmail(String emailAddress){
        //this.alertSubject = alertSubject;
        this.alertSubject.attach(this);
        this.emailAddress = emailAddress;
    }


    public void update()  {
       // EmailNotify emailNotify = EmailNotify.getInstance();
        try{
            EmailNotify.getInstance().sendEmail(emailAddress,alertSubject.getSensorid());
        }catch (Exception e){
            System.out.println(e.getMessage());
        }

    }
}
