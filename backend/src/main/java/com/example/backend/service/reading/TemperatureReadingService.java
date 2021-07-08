package com.example.backend.service.reading;


import com.example.backend.ManageAlerts.*;
import com.example.backend.entity.reading.TemperatureReading;
import com.example.backend.entity.sensor.TempreatureSensor;
import com.example.backend.repository.reading.TemperatureReadingRepository;
import com.example.backend.repository.sensor.TemperatureSensorRepository;
import com.example.backend.service.sensor.TemperatureSensorService;
import com.example.backend.thresholdchecker.Checker;
import com.example.backend.thresholdchecker.CheckerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TemperatureReadingService implements TemperatureReadingServiceInterface {

    @Autowired
    private TemperatureReadingRepository temperatureReadingRepository;

    @Autowired
    private TemperatureSensorService temperatureSensorService;

    @Override
    public TemperatureReading saveTemperatureReading(TemperatureReading temperatureReading){
        CheckerFactory checkerFactory= new CheckerFactory();
        Checker checker = new CheckerFactory().getRelevantChecker("TempreatureSensor");
        boolean alert = checker.thresholdChecker(temperatureReading.getTemperaturevalue() , temperatureSensorService.getDetails(temperatureReading.getSensorid()).getThresholdtemp());
        System.out.println(String.valueOf(alert));
        temperatureReading.setAlert(alert);
        AlertSubject alertSubject = new AlertSubject();
        AlertObserver.alertSubject = alertSubject;
        new AlertObserverSms("+94703135478");
        new AlertObserverCall("+94703135478");
        new AlertObserverEmail("uddf@gmail.com");
        new AlertObserverEmail("gothama@gmail.com");
        alertSubject.setSensorid(String.valueOf(temperatureReading.getSensorid()));
        return temperatureReadingRepository.save(temperatureReading);
    }






}
