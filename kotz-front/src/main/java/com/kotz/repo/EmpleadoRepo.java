package com.kotz.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.kotz.model.Empleados;

public interface EmpleadoRepo extends CrudRepository<Empleados, Integer>{

	@Query(value="SELECT ID_EMPLEADO cdEmpleado, NB_EMPLEADO nbNombre, NB_EMPRESA nbEmpresa, CD_TELEFONO cdTelefono FROM Empleados ", nativeQuery = true)
	List<Empleados> listaEmpleados();
	
}
