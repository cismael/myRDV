package com.myrdv.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class HelloApplication {

    private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public String sayHello() {
        LOGGER.debug("calling method : greet");
        return "Hello from the back-end";
    }

}
