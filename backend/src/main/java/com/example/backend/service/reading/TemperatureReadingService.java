package com.example.backend.service.reading;


import com.example.backend.ManageAlerts.AlertObserver;
import com.example.backend.ManageAlerts.AlertObserverCall;
import com.example.backend.ManageAlerts.AlertObserverEmail;
import com.example.backend.ManageAlerts.AlertSubject;
import com.example.backend.entity.reading.TemperatureReading;
import com.example.backend.repository.reading.TemperatureReadingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TemperatureReadingService implements TemperatureReadingServiceInterface {

    @Autowired
    private TemperatureReadingRepository temperatureReadingRepository;

    @Override
    public TemperatureReading saveTemperatureReading(TemperatureReading temperatureReading){
       // System.out.println(temperatureReading.getTemperaturevalue());
      //  temperatureReading.setAlert(true);
        AlertSubject alertSubject = new AlertSubject();
        AlertObserver k1 = new AlertObserverCall(alertSubject , "0183848388");
        AlertObserver k2 = new AlertObserverEmail(alertSubject, "uddf@gmail.com");
        AlertObserver k3 = new AlertObserverEmail(alertSubject, "gothama@gmail.com");
        alertSubject.setSensorid(String.valueOf(temperatureReading.getSensorid()));
        return temperatureReadingRepository.save(temperatureReading);
    }




}
