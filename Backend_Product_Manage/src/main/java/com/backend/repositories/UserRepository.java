package com.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.backend.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

	User findByUsername(String username);

}