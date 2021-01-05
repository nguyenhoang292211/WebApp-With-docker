package com.example.Exam.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "employee")

public class EmployeeEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_employee")
	private int id;
	
	@Column(name="name_employee")	
	private String name;
	
	@Column(name= "birthday_employee")
	private Date birthday   ; 
	
	@Column(name="sex_employee")
	private String sex;
	
	@Column(name="identitycard_employee")
	private String identityCard;
	
	@Column(name="phone_employee")
	private String phone ;
	
	@Column(name="email_employee")
	private String email;
	
	@Column( name="address_employee")
	private String address;
	
	@Column(name="salary_employee")
	private float salary;
	
	@Column(name="id_typeemployee")
	private int id_type;
	
	@Column(name="img_employee")
	private String image;
	
	@Column(name="id_deparment")
	private int id_department;
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getIdentityCard() {
		return identityCard;
	}

	public void setIdentityCard(String identityCard) {
		this.identityCard = identityCard;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public float getSalary() {
		return salary;
	}

	public void setSalary(float salary) {
		this.salary = salary;
	}

	public int getId_type() {
		return id_type;
	}

	public void setId_type(int id_type) {
		this.id_type = id_type;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getId_department() {
		return id_department;
	}

	public void setId_department(int id_department) {
		this.id_department = id_department;
	}

	public EmployeeEntity() {
		// TODO Auto-generated constructor stub
	}
	
	

}
