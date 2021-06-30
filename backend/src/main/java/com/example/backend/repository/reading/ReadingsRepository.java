package com.example.backend.repository.reading;

import com.example.backend.entity.reading.Reading;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface ReadingsRepository extends JpaRepository<Reading, Integer> {

    List<Reading> findBySensorid(int k);
}
