package com.springularbooks.service.impl;


import com.springularbooks.entity.Customer;
import com.springularbooks.repository.CustomerRepository;
import com.springularbooks.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public Customer login(String email, String password) {
        Customer customer = customerRepository.findByEmail(email);

        if (customer != null && password.equals(customer.getPassword())) {
            System.out.println("Password match.Login Successful!");
            return customer;
        } else {
            System.out.println("Incorrect login details");
        }
        return null;
    }
}
