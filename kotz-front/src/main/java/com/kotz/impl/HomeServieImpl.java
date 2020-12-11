package com.kotz.impl;

import com.kotz.service.HomeService;
import com.kotz.util.ResponseGeneric;

public class HomeServieImpl implements HomeService{

	public ResponseGeneric goHome() {
		ResponseGeneric response = new ResponseGeneric();
		try {
			
		}catch(Exception e) {
			response.setCdMensaje("0");
			response.setNbMensaje("Error");
			response.setResponse(e);
			e.printStackTrace();
		}
		return response;
	}

	
	
}
