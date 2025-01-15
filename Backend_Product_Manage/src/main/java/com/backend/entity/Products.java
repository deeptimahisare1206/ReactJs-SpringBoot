package com.backend.entity;

import java.math.BigDecimal;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.jsonFormatVisitors.JsonFormatTypes;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Products {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer product_id;
	private String product_name;
	private String product_desc;
	private String product_brand;
	private BigDecimal product_price;
	private String product_Category;
	private Integer product_quantity;
	private Boolean product_status;
	
//	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-YYYY")
	private Date release_date;
	
	
	private String image_name;
	private String image_type;
	
	@Lob 
	private byte[] image_data;
	
	
	
//==================================Getters & Setters=================================================
	
	
	
	
	public Integer getProduct_id() {
		return product_id;
	}
	public void setProduct_id(Integer product_id) {
		this.product_id = product_id;
	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public String getProduct_desc() {
		return product_desc;
	}
	public void setProduct_desc(String product_desc) {
		this.product_desc = product_desc;
	}
	public String getProduct_brand() {
		return product_brand;
	}
	public void setProduct_brand(String product_brand) {
		this.product_brand = product_brand;
	}
	public BigDecimal getProduct_price() {
		return product_price;
	}
	public void setProduct_price(BigDecimal product_price) {
		this.product_price = product_price;
	}
	public String getProduct_Category() {
		return product_Category;
	}
	public void setProduct_Category(String product_Category) {
		this.product_Category = product_Category;
	}
	public Integer getProduct_quantity() {
		return product_quantity;
	}
	public void setProduct_quantity(Integer product_quantity) {
		this.product_quantity = product_quantity;
	}
	public Boolean getProduct_status() {
		return product_status;
	}
	public void setProduct_status(Boolean product_status) {
		this.product_status = product_status;
	}
	public Date getRelease_date() {
		return release_date;
	}
	public void setRelease_date(Date release_date) {
		this.release_date = release_date;
	}
	public String getImage_name() {
		return image_name;
	}
	public void setImage_name(String image_name) {
		this.image_name = image_name;
	}
	public String getImage_type() {
		return image_type;
	}
	public void setImage_type(String image_type) {
		this.image_type = image_type;
	}
	public byte[] getImage_data() {
		return image_data;
	}
	public void setImage_data(byte[] image_data) {
		this.image_data = image_data;
	}
	

}
