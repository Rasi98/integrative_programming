package com.example.backend.controller;

import com.example.backend.entity.reading.Reading;
import com.example.backend.entity.reading.TemperatureReading;
import com.example.backend.entity.sensor.Sensor;
import com.example.backend.entity.sensor.TempreatureSensor;
import com.example.backend.service.reading.TemperatureReadingService;
import com.example.backend.service.sensor.TemperatureSensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/sensor")
public class SensorController {

    @Autowired
    @Resource(name="temperatureSensorService")
    private TemperatureSensorService temperatureSensorService;

    @Autowired
    @Resource(name="temperatureReadingService")
    private TemperatureReadingService temperatureReadingService;

    //Endpoint to add new sensor
    @PostMapping("/addsensor")
    public Sensor addsensor(@RequestBody TempreatureSensor tempreatureSensor){
        return temperatureSensorService.addsensor(tempreatureSensor);
    }

    //Endpoint to get all sensor details
    @GetMapping("/getallsensors")
    public List <Sensor> getallsensordetails(){
        return temperatureSensorService.getallsensors();
    }

    //Endpoint to get readings of a particular sensor
    @GetMapping("/getreadingsofsensor/{id}")
    public List<Reading> getallreadings(@PathVariable("id")  Integer k){
        return temperatureSensorService.getallreadingsofasensor(k);
    }

    //Endpoint to get the alert readings of a particular sensor
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/getalertsofsensor/{id}")
    public List<Reading> getallalertreadings(@PathVariable("id")  Integer k){
        return temperatureSensorService.getallreadingswithalertsofasensor(k);
    }
}
