package com.springularbooks.controller;


import com.springularbooks.entity.Cart;
import com.springularbooks.entity.Customer;
import com.springularbooks.repository.CartRepository;
import com.springularbooks.repository.CustomerRepository;
import com.springularbooks.service.CartService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/cart")
@Slf4j
public class CartController {

    @Autowired
    private CartService cartService;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private CustomerRepository customerRepository;

//    @PostMapping("/")
//    public Cart AddCartByCustId(@RequestBody Cart cart, Integer custId) {
//        return cartService.saveCart(cart, custId);
//    }

    @PostMapping("/")
    public Cart addToCart(@RequestBody Cart cart) {

        System.out.println(cart.getCustomer().getCustId());
        Integer cust_id = cart.getCustomer().getCustId();
        Customer cust = customerRepository.getById(cust_id);
        System.out.println(cust);
        cart.setCustomer(cust);

        Cart c1 = cartRepository.save(cart);
        System.out.println(c1);
        return c1;
    }

    @DeleteMapping("/{id}")
    public Cart deleteCart(@PathVariable("id") Integer cart_id) {
        return cartService.deleteCart(cart_id);
    }

    @PutMapping("/{id}")
    public Cart updateCart(@PathVariable("id") Integer cart_id, @RequestBody Cart cart) {
        return cartService.updateCart(cart_id, cart);
    }

    @GetMapping("/{id}")
    public List<Cart> getCarts(@PathVariable("id") Integer custId) {
        List<Cart> cart = cartRepository.findcartItemsByCustomer(custId);
        return cart;
    }

    @GetMapping("/quantity/{id}")
    public Integer getQuantity(@PathVariable("id") Integer custId) {
        List<Cart> cart = cartRepository.findcartItemsByCustomer(custId);
        Integer quantity = cart.size();
        return quantity;
    }
}


//

