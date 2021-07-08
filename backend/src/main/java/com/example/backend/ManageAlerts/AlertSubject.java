package com.example.backend.ManageAlerts;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class AlertSubject {
    private List<AlertObserver> alertObservers = new ArrayList<AlertObserver>();
    private String sensorid;

    public String getSensorid() {
        return sensorid;
    }

    public void setSensorid(String sensorid) {
        this.sensorid = sensorid;
        try {
            notifyAllObservers();
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }

    }

    public void attach(AlertObserver alertObserver){
        alertObservers.add(alertObserver);
    }

    private void notifyAllObservers() {
        for(AlertObserver alertObserver:alertObservers){
            alertObserver.update();
        }
    }

}
