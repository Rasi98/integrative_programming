package com.example.backend.service.sensor;

import com.example.backend.entity.reading.Reading;
import com.example.backend.entity.sensor.Sensor;
import com.example.backend.entity.sensor.TempreatureSensor;
import com.example.backend.repository.reading.TemperatureReadingRepository;
import com.example.backend.repository.sensor.TemperatureSensorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TemperatureSensorService implements TemperatureSensorServiceInterface{

    @Autowired
    private TemperatureSensorRepository temperatureSensorRepository;

    @Autowired
    private TemperatureReadingRepository temperatureReadingRepository;

    @Override
    public TempreatureSensor addsensor(TempreatureSensor tempreatureSensor) {
        return temperatureSensorRepository.save(tempreatureSensor);
    }

    @Override
    public List<Sensor> getallsensors() {
        return temperatureSensorRepository.findAll();
    }

    @Override
    public List<Reading> getallreadingsofasensor(int k) {
        return temperatureReadingRepository.findBySensorid(k);
    }

    @Override
    public List<Reading> getallreadingswithalertsofasensor(int k) {
        return temperatureReadingRepository.findBySensoridAndAlert(k , true);
    }

    @Override
    public TempreatureSensor getDetails(int k) {
        return temperatureSensorRepository.findBySensorid(k);
    }


}
