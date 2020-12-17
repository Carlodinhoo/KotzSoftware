package com.kotz.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.kotz.model.Empleados;

public interface EmpleadoRepo extends CrudRepository<Empleados, Integer>{

	@Query(value="SELECT id_empleado, nb_empleado, nb_empresa, cd_telefono FROM Empleados ", nativeQuery = true)
	List<Empleados> listaEmpleados();
	
}
