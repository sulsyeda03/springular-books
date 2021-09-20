package com.springularbooks.service;

import com.springularbooks.entity.Cart;
import com.springularbooks.entity.Customer;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public interface CartService {

    public Cart saveCart(Cart cart, Integer custId);

    public Cart saveCart(Cart cart);

    public Cart findById(Integer cart_id);

    public Cart deleteCart(Integer cart_id);

    public Cart updateCart(Integer cart_id, Cart cart);


}
