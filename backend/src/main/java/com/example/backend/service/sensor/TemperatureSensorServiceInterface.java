package com.example.backend.service.sensor;

import com.example.backend.entity.reading.Reading;
import com.example.backend.entity.sensor.Sensor;
import com.example.backend.entity.sensor.TempreatureSensor;

import java.util.List;

public interface TemperatureSensorServiceInterface {

    TempreatureSensor addsensor(TempreatureSensor tempreatureSensor);
    List<Sensor> getallsensors();
    List <Reading> getallreadingsofasensor(int k);
}
