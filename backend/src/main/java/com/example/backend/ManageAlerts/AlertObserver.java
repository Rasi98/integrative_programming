package com.example.backend.ManageAlerts;

public abstract class AlertObserver {
   // protected AlertSubject alertSubject;
    public static AlertSubject alertSubject;
    public abstract void update();
}
