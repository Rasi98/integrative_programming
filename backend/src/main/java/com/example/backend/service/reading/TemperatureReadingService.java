package com.example.backend.service.reading;


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
        return temperatureReadingRepository.save(temperatureReading);
    }




}
