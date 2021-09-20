package com.springularbooks.repository;

import com.springularbooks.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer > {

    Customer findByEmail(String email);
}
