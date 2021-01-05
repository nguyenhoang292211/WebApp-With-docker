package com.example.Exam.service;

import java.util.List;

import com.example.Exam.dto.EmployeeDTO;

public interface EmployeeService {

	EmployeeDTO save (EmployeeDTO employee);
	
	List<EmployeeDTO> findAll();
	
	EmployeeDTO findById(int id);
	
	
}
