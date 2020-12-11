package com.kotz.config;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import com.kotz.impl.HomeServieImpl;

@ApplicationPath("/rest")
public class JerseyConfig extends Application{

	@Override
	public Set<Object> getSingletons() {
		// TODO Auto-generated method stub
		Set<Object> singleton = new HashSet<Object>();
		singleton.add(new HomeServieImpl());
		return singleton;
	}

	
}
