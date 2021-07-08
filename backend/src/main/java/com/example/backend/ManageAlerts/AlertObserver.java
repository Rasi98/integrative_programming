package com.example.backend.ManageAlerts;

import javax.mail.MessagingException;
import java.io.IOException;

public abstract class AlertObserver {
    // protected AlertSubject alertSubject;
    public static AlertSubject alertSubject;
    public abstract void update();
}
