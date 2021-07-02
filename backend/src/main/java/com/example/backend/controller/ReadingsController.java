package com.example.backend.controller;

import com.example.backend.entity.reading.TemperatureReading;
import com.example.backend.service.reading.TemperatureReadingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/temperaturereading")
public class ReadingsController {

    @Autowired
    @Resource(name="temperatureReadingService")
    private TemperatureReadingService temperatureReadingService;

    //Endpoint to save temperature reading
    @PostMapping("/addreading")
    public TemperatureReading addreading(@RequestBody TemperatureReading temperatureReading){
        return temperatureReadingService.saveTemperatureReading(temperatureReading);
    }




}
