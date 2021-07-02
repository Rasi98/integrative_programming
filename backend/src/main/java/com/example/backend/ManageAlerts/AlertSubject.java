package com.example.backend.ManageAlerts;

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
        notifyAllObservers();
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
