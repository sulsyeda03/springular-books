package com.springularbooks.service;

import com.springularbooks.entity.Customer;
import com.springularbooks.entity.Orders;
import org.springframework.stereotype.Service;

@Service
public interface OrdersService {

    public Orders saveOrders(Orders orders) ;

    public Orders checkout(Orders orders, Integer custId);
}
