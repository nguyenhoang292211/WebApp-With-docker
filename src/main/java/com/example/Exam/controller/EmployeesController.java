package com.example.Exam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Exam.dto.EmployeeDTO;
import com.example.Exam.model.EmployeeEntity;
import com.example.Exam.service.EmployeeService;

@SuppressWarnings("unused")
@RestController

public class EmployeesController {

	@Autowired
	private EmployeeService employeeService;
	
	@PostMapping("/employee")	
	public EmployeeDTO save(@RequestBody EmployeeDTO employee)
	{
		return employeeService.save(employee);
	}
	
	@GetMapping("/findAll")
	public List<EmployeeDTO> findall()
	{
		return employeeService.findAll();
	}
	
	@GetMapping("/api/employee/find/{id}")
	public EmployeeDTO findById(@PathVariable int id)
	{
		return employeeService.findById(id);
	}

}
