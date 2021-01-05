package com.example.Exam.model;

import java.util.Date;

public class Attendance {

	private int id_emp;
	private int month;
	private int year;
	private Date dayoff;
	private Date dayon;
	
	public int getId_emp() {
		return id_emp;
	}

	public void setId_emp(int id_emp) {
		this.id_emp = id_emp;
	}

	public int getMonth() {
		return month;
	}

	public void setMonth(int month) {
		this.month = month;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public Date getDayoff() {
		return dayoff;
	}

	public void setDayoff(Date dayoff) {
		this.dayoff = dayoff;
	}

	public Date getDayon() {
		return dayon;
	}

	public void setDayon(Date dayon) {
		this.dayon = dayon;
	}

	public Attendance() {
		// TODO Auto-generated constructor stub
	}

}
