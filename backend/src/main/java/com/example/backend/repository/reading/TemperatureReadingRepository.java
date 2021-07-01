package com.example.backend.repository.reading;

import com.example.backend.entity.reading.Reading;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TemperatureReadingRepository extends ReadingsRepository {


    List<Reading> findBySensoridAndAlert(int k, boolean b);
}
