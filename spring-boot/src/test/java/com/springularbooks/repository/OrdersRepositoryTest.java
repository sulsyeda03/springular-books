package com.springularbooks.repository;

import com.springularbooks.entity.Customer;
//import com.springularbooks.entity.OrderDetails;
import com.springularbooks.entity.Orders;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OrdersRepositoryTest {

    @Autowired
    private OrdersRepository ordersRepository;
    @Autowired
    private CustomerRepository customerRepository;

//    @Test
//    void saveOrders(){
//        Customer cust = customerRepository.getById(1);
//        Orders order1 = Orders.builder()
//                .totalItems(2)
//                .totalOrderCost(40.00)
//                .customer(cust)
//                .build();
//
//        ordersRepository.save(order1);
//        System.out.println(order1);
//    }


//    @Test
//    void findByOrderId() {
//        Orders order1 = ordersRepository.findByOrderId(1);
//        System.out.println(order1);
//    }
}