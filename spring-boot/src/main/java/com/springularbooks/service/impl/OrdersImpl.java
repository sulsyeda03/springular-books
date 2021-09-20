package com.springularbooks.service.impl;

import com.springularbooks.entity.Cart;
import com.springularbooks.entity.Customer;
import com.springularbooks.entity.Orders;
import com.springularbooks.repository.CartRepository;
import com.springularbooks.repository.CustomerRepository;
import com.springularbooks.repository.OrdersRepository;
import com.springularbooks.service.OrdersService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

@Service
@Slf4j
public class OrdersImpl implements OrdersService {

    @Autowired
    private OrdersRepository ordersRepository;
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private CartRepository cartRepository;


    @Override
    public Orders saveOrders(Orders orders) {
        return ordersRepository.save(orders);
    }

    @Override
    public Orders checkout(Orders orders, Integer custId) {
        orders.setOrderDate(new Date());
        List<Cart> cart = cartRepository.findcartItemsByCustomer(custId);
        System.out.println("*:"+cart);

        orders.setCart(cart);

        ordersRepository.save(orders);
        log.info("orders: " + orders);

     //   cartRepository.removeAllByCustId(custId);

        return orders;
    }




}
