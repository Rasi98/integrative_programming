package com.example.backend.notificationchannels;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

public class EmailNotify {
    private String emailAddress, sensorid;
    private static EmailNotify instance = new EmailNotify();

    public static EmailNotify getInstance() {
        return instance;
    }

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmail(String emailAddress, String sensorid) {
        //add the send email logic - Thilina

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(emailAddress);
        message.setSubject("Sensor reading");
        message.setText("Sensor ID: " + sensorid);

        javaMailSender.send(message);

        System.out.println("Email to: " + emailAddress + " Sensor ID: " + sensorid);
    }
}
