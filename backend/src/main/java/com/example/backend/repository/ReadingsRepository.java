package com.example.backend.repository;

import com.example.backend.entity.Reading;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReadingsRepository extends JpaRepository<Reading, Integer> {

}
