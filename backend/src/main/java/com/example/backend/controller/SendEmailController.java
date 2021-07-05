package com.example.backend.controller;

import com.example.backend.notificationchannels.EmailNotify;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import java.io.IOException;

@RestController
public class SendEmailController {

    @Autowired
    EmailNotify emailNotify;

    @RequestMapping(value = "/sendemail")
    public String send() throws AddressException, MessagingException, IOException {
        //sendEmail();
        emailNotify.sendEmail();
//        sendingEmailApplication.sendEmailWithAttachment();
        return "Email sent successfully";
    }

}
