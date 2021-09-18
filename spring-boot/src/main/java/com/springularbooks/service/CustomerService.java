package com.springularbooks.service;

import com.springularbooks.entity.Customer;
import org.springframework.stereotype.Service;

@Service
public interface CustomerService {

    public Customer saveCustomer(Customer customer);

    public Customer login(String email, String password);

}
