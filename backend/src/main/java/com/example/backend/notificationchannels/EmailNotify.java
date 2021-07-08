package com.example.backend.notificationchannels;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import javax.mail.*;
import javax.mail.internet.*;
import java.io.IOException;
import java.util.Date;
import java.util.Properties;

public class EmailNotify {
    private String emailAddress, sensorid;
    private static EmailNotify instance = new EmailNotify();
    public static EmailNotify getInstance() {
        return instance;
    }


    public void sendEmail(String emailAddress, String sensorid)  {
        //add the send email logic - Thilina
try {


    Properties props = new Properties();
    props.put("mail.smtp.auth", "true");
    props.put("mail.smtp.starttls.enable", "true");
    props.put("mail.smtp.host", "smtp.gmail.com");
    props.put("mail.smtp.port", "587");

    Session session = Session.getInstance(props, new javax.mail.Authenticator() {
        protected PasswordAuthentication getPasswordAuthentication() {
            return new PasswordAuthentication("cloudsensorplatform@gmail.com", "alertmanagement");
        }
    });
    Message msg = new MimeMessage(session);
    msg.setFrom(new InternetAddress("cloudsensorplatform@gmail.com", false));

    msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(emailAddress));
    msg.setSubject("Tutorials point email");
    msg.setContent("Tutorials point email", "text/html");
    msg.setSentDate(new Date());

    Transport.send(msg);
    System.out.println("Email to: " + emailAddress + " Sensor ID: " + sensorid);
}
catch (Exception e){
    System.out.println(e.getMessage());
}
    }
}
