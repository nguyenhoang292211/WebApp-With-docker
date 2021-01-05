package com.example.Exam.service.implement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.example.Exam.dto.EmployeeDTO;
import com.example.Exam.mapper.EmployeeMapper;
import com.example.Exam.model.EmployeeEntity;
import com.example.Exam.repository.EmployeeRepository;
import com.example.Exam.service.EmployeeService;

@Service

public class DefaultEmployeeService implements EmployeeService {
	
	@Autowired	
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private EmployeeMapper employeeMapper;
	
	@Override
	public EmployeeDTO save(EmployeeDTO employee) {
		
		EmployeeEntity employeeEntity = employeeMapper.toEntity(employee);	
		return employeeMapper.toDTO(employeeRepository.save(employeeEntity));
	}
	
	@Override
	public List<EmployeeDTO> findAll()
	{
		List<EmployeeEntity> listEmployee= employeeRepository.findAll();
		List<EmployeeDTO> listEmployeeDTO= new ArrayList<EmployeeDTO>();
		for(int i=0; i<listEmployee.size();i++)
		{
			listEmployeeDTO.add(employeeMapper.toDTO(listEmployee.get(i)));
		}
			
		return  listEmployeeDTO;
	}

	@Override
	public EmployeeDTO findById(int id) {
		
		EmployeeEntity employeeEntity= employeeRepository.findbyid(id);
		return employeeMapper.toDTO(employeeEntity);
	}
	

	
	
}
