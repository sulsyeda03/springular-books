package com.springularbooks.controller;


import com.springularbooks.entity.Cart;
import com.springularbooks.entity.Customer;
import com.springularbooks.entity.Orders;
import com.springularbooks.repository.CartRepository;
import com.springularbooks.repository.OrdersRepository;
import com.springularbooks.service.OrdersService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/orders")
@Slf4j
public class OrdersController {

    @Autowired
    private OrdersService ordersService;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private OrdersRepository ordersRepository;

    @PostMapping("/")
    public Orders checkout(@RequestBody Orders orders){
        System.out.println("Inside post mapping - orders...");
        System.out.println(orders);
        Integer cust_id = orders.getCustomer().getCustId();
            System.out.println("dispatching to other function....");
            return ordersService.checkout(orders, cust_id );
//        }
    }

    @GetMapping("/{id}")
    public List<Orders> getOrders(@PathVariable("id") Integer custId) {
        List<Orders> orders = ordersRepository.findOrdersByCustomer(custId);
        System.out.println(orders);
        return orders;
    }
}
