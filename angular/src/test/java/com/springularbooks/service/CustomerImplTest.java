package com.springularbooks.service;

import com.springularbooks.entity.Customer;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
class CustomerImplTest {

    @Autowired
    private CustomerImpl customerImpl;

    @Test
    void saveCustomer() {
        Customer customer1 = Customer.builder()
                .firstName("Mark")
                .lastName("Smith")
                .email("mark@gmail.com")
                .password("12345")
                .build();

        customerImpl.saveCustomer(customer1);

//        Customer customer2 = Customer.builder()
//                .firstName("Mark2")
//                .lastName("Smith2")
//                .email("mark@gmail.com")
//                .password("1234545")
//                .build();
//
//        customerImpl.saveCustomer(customer2);

    }

    @Test
    void login() {

        Customer customer1 = customerImpl.login("mark@gmail.com","12345");
        System.out.println(customer1);

        Customer customer2 = customerImpl.login("martk@gmail.com","1234566");
        System.out.println(customer2);
    }
}