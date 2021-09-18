package com.springularbooks.repository;

import com.springularbooks.entity.Customer;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CustomerRepositoryTest {

    @Autowired
    private CustomerRepository customerRepository;

    @Test
    void findByEmail() {
        Customer customer = customerRepository.findByEmail("mark@gmail.com");
        System.out.println(customer);
    }
}