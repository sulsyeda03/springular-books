package com.springularbooks.controller;

import com.springularbooks.entity.Customer;
import com.springularbooks.service.CustomerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/login")
@Slf4j
public class CustomerController {

    @Autowired
    private CustomerService customerService;


    @PostMapping("/")
    public Customer login(@RequestBody Customer customer) {
        log.info(customer.getEmail()+ " : "+customer.getPassword());
        Customer cust = customerService.login(customer.getEmail(),customer.getPassword());
        System.out.println(cust);
        return cust;
    }



}
