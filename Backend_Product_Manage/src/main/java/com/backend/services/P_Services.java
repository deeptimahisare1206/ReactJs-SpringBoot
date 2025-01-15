package com.backend.services;

import java.io.IOException;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.backend.entity.Products;

@Service
public interface P_Services {

	public Products add(Products products,MultipartFile imageFile) throws IOException ;
	
	public List<Products> getAll();
	
	public Products getOne(Integer product_id);
	
	public void delete(Integer product_id);
	
	public Products update(Products products);
}
