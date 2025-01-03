package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.entity.Products;
import com.backend.services.P_Services;

@RestController
@RequestMapping("/products")
@CrossOrigin("http://localhost:5173")
public class MyControl {

//	@GetMapping("/")
//	@ResponseBody
//	public String index() {
//		return "hello";
//	}

	
	@Autowired
	P_Services p_Services;
	
	public MyControl(P_Services p_Services) {
		this.p_Services = p_Services;
	}
	
	@PostMapping
	public Products add(@RequestBody Products products) {
		return p_Services.add(products);
	}
	@GetMapping
	public List<Products> getAll() {
		return p_Services.getAll();
	}
	@GetMapping("/{product_id}")
	public Products getOne(@PathVariable Integer product_id) {
		return p_Services.getOne(product_id);
	}
	
}
