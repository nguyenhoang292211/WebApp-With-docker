package com.example.Exam.mapper;

import org.springframework.stereotype.Component;

import com.example.Exam.dto.EmployeeDTO;
import com.example.Exam.model.EmployeeEntity;

@Component
public class EmployeeMapper {

	 public EmployeeEntity  toEntity (EmployeeDTO employee)
	 {
		 EmployeeEntity employeeEntity= new  EmployeeEntity();
		 employeeEntity.setName(employee.getName());
		 employeeEntity.setAddress(employee.getAddress());
		 employeeEntity.setBirthday(employee.getBirthday());
		 employeeEntity.setEmail(employee.getEmail());
		 employeeEntity.setImage(employee.getImage());
		 employeeEntity.setPhone(employee.getPhone());
		 employeeEntity.setSalary(employee.getSalary());
		 employeeEntity.setSex(employee.getSex());
		 employeeEntity.setIdentityCard(employee.getIdentityCard());
		 return employeeEntity;
		 
	 }
	 
	 public EmployeeDTO toDTO (EmployeeEntity employee)
	 {
		 
		 EmployeeDTO employeeDTO= new  EmployeeDTO();
		 employeeDTO.setName(employee.getName());
		 employeeDTO.setAddress(employee.getAddress());
		 employeeDTO.setBirthday(employee.getBirthday());
		 employeeDTO.setEmail(employee.getEmail());
		 employeeDTO.setImage(employee.getImage());
		 employeeDTO.setPhone(employee.getPhone());
		 employeeDTO.setSalary(employee.getSalary());
		 employeeDTO.setSex(employee.getSex());
		 employeeDTO.setIdentityCard(employee.getIdentityCard());
		 return employeeDTO;
	 }
}
