package com.example.Exam.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.Exam.model.EmployeeEntity;

public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Integer> {
	
	
	@Query(value = "Select * from Employee e where e.id_employee =:id ", nativeQuery = true)
	EmployeeEntity findbyid(@Param("id") Integer id);
	
	
}
