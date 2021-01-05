package com.example.Exam.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("/api/v1")
public class HelloController {
	
	public HelloController() {
		// TODO Auto-generated constructor stub
	}
	
	@GetMapping("/hello")
	public String hello()
	{
		System.out.print("helooooo");
		return "Hello world";
	}
	
	@RequestMapping("/")
	public String index() {
		return "Greetings from Spring Boot!";
	}


}
