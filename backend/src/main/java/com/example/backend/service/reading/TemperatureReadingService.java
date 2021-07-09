package com.example.backend.service.reading;


import com.example.backend.ManageAlerts.*;
import com.example.backend.entity.reading.TemperatureReading;
import com.example.backend.entity.sensor.TempreatureSensor;
import com.example.backend.entity.user.StaffUser;
import com.example.backend.repository.reading.TemperatureReadingRepository;
import com.example.backend.repository.sensor.TemperatureSensorRepository;
import com.example.backend.service.sensor.TemperatureSensorService;
import com.example.backend.service.user.StaffUserService;
import com.example.backend.thresholdchecker.Checker;
import com.example.backend.thresholdchecker.CheckerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.List;

@Service
public class TemperatureReadingService implements TemperatureReadingServiceInterface {

    @Autowired
    private TemperatureReadingRepository temperatureReadingRepository;

    @Autowired
    private TemperatureSensorService temperatureSensorService;

    @Autowired
    private StaffUserService staffUserService;

    @Override
    public TemperatureReading saveTemperatureReading(TemperatureReading temperatureReading) throws IOException, MessagingException {
        CheckerFactory checkerFactory= new CheckerFactory();
        Checker checker = new CheckerFactory().getRelevantChecker("TempreatureSensor");
        boolean alert = checker.thresholdChecker(temperatureReading.getTemperaturevalue() , temperatureSensorService.getDetails(temperatureReading.getSensorid()).getThresholdtemp());
        System.out.println(String.valueOf(alert));
        temperatureReading.setAlert(alert);
        AlertSubject alertSubject = new AlertSubject();
        AlertObserver.alertSubject = alertSubject;

        List<StaffUser> staffUserCall = staffUserService.getNotificationDetails("call");
        List<StaffUser> staffUserSMS = staffUserService.getNotificationDetails("sms");
        List<StaffUser> staffUserEmail = staffUserService.getNotificationDetails("email");

        for(StaffUser staffUser : staffUserCall){
            new AlertObserverCall(staffUser.getTelNo());
        }

        for(StaffUser staffUser : staffUserSMS){
            new AlertObserverSms(staffUser.getTelNo());
        }

        for(StaffUser staffUser : staffUserEmail){
            new AlertObserverEmail(staffUser.getEmail());
        }

        alertSubject.setSensorid(String.valueOf(temperatureReading.getSensorid()));
        return temperatureReadingRepository.save(temperatureReading);
    }






}
