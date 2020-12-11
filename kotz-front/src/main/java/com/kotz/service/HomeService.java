package com.kotz.service;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.kotz.util.ResponseGeneric;


@Path("/HomeService")
public interface HomeService {

	@GET
	@Path("/goHome")
	@Produces({MediaType.APPLICATION_JSON})
	public ResponseGeneric goHome();
	
}
