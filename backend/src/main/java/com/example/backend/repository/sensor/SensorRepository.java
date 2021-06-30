package com.example.backend.repository.sensor;

import com.example.backend.entity.sensor.Sensor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface SensorRepository extends JpaRepository<Sensor , Integer> {

}
