package com.example.backend.repository.sensor;

import com.example.backend.entity.sensor.TempreatureSensor;
import org.springframework.stereotype.Repository;

@Repository
public interface TemperatureSensorRepository extends SensorRepository{

    TempreatureSensor findBySensorid(int k);
}
