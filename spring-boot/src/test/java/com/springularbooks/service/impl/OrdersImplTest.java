package com.springularbooks.service.impl;

import com.springularbooks.entity.Cart;
import com.springularbooks.entity.Customer;
import com.springularbooks.entity.Orders;
import com.springularbooks.repository.CartRepository;
import com.springularbooks.repository.CustomerRepository;
import com.springularbooks.repository.OrdersRepository;
import org.hibernate.PersistentObjectException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OrdersImplTest {

    @Autowired
    private OrdersImpl orderImpl;
    @Autowired
    private OrdersRepository ordersRepository;
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private CartRepository cartRepository;


//    @Test
//    void saveOrders() {
//
//        Customer cust = new Customer();
//                cust = customerRepository.getById(4);
//
//        Cart cart1 = new Cart();
//                cart1 = cartRepository.getById(5);
//
//        Cart cart2  = new Cart();
//                cart2 = cartRepository.getById(8);
//
//        Orders order1 = Orders.builder()
//                .totalItems(3)
//                .totalOrderCost(146.5)
//                .orderDate(new Date())
//                .cart(List.of(cart1, cart2))
//                .customer(cust)
//                .build();
//
//
//        ordersRepository.save(order1);
//    }


}