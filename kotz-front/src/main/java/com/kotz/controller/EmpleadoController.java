package com.kotz.controller;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.kotz.dto.EmpleadoDTO;
import com.kotz.model.Empleados;
import com.kotz.repo.EmpleadoRepo;
import com.kotz.util.ResponseGeneric;

@Controller
public class EmpleadoController {
	
	@Autowired
	EmpleadoRepo empleadoRepo;
	
	@GetMapping(path = "/EmpleadoController/consultaEmpleados", produces=MediaType.APPLICATION_JSON)
	public ResponseEntity<ResponseGeneric> consultaEmpleados(){
		ResponseGeneric response = new ResponseGeneric();
		List<Empleados> listaEmpleados = new ArrayList<Empleados>();
		listaEmpleados = empleadoRepo.listaEmpleados();
		response.setResponse(listaEmpleados);
		return new ResponseEntity<ResponseGeneric>(response, HttpStatus.OK);
		
	}
}
