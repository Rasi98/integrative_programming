package com.example.backend.thresholdchecker;

import com.example.backend.entity.reading.Reading;

public interface Checker {
    public boolean thresholdChecker(float readingValue , float thresholdValue);
}
