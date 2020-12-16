package com.kotz.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Empleados {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_EMPLEADO")
	private Integer cdEmpleado;
	
	@Column(name = "NB_EMPLEADO")
	private String nbNombre;
	
	@Column(name = "NB_EMPRESA")
	private String nbEmpresa;
	
	@Column(name = "CD_TELEFONO")
	private String cdTelefono;
	
	public String getNbNombre() {
		return nbNombre;
	}
	public void setNbNombre(String nbNombre) {
		this.nbNombre = nbNombre;
	}
	public String getNbEmpresa() {
		return nbEmpresa;
	}
	public void setNbEmpresa(String nbEmpresa) {
		this.nbEmpresa = nbEmpresa;
	}
	public String getCdTelefono() {
		return cdTelefono;
	}
	public void setCdTelefono(String cdTelefono) {
		this.cdTelefono = cdTelefono;
	}
	public Integer getCdEmpleado() {
		return cdEmpleado;
	}
	public void setCdEmpleado(Integer cdEmpleado) {
		this.cdEmpleado = cdEmpleado;
	}
	
	
}
