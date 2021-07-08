package com.example.backend.service.reading;

import com.example.backend.entity.reading.TemperatureReading;

import javax.mail.MessagingException;
import java.io.IOException;

//https://www.dineshonjava.com/what-is-interface-and-what-are-the-advantages-of-making-use-of-them-in-java/

public interface TemperatureReadingServiceInterface {
    TemperatureReading saveTemperatureReading(TemperatureReading reading) throws IOException, MessagingException;


}
