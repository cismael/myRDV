package com.myrdv.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloApplication {

	@RequestMapping("/hello")
	public String sayHello(){
		return "Hello from the back-end";
	}
}
