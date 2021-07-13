package com.example.backend.controller;

import com.example.backend.entity.reading.TemperatureReading;
import com.example.backend.service.reading.TemperatureReadingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.mail.MessagingException;
import java.io.IOException;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/temperaturereading")
public class ReadingsController {

    @Autowired
    @Resource(name="temperatureReadingService")
    private TemperatureReadingService temperatureReadingService;

    //Endpoint to save temperature reading
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/addreading")
    public TemperatureReading addreading(@RequestBody TemperatureReading temperatureReading) throws IOException, MessagingException {
        return temperatureReadingService.saveTemperatureReading(temperatureReading);
    }


}
