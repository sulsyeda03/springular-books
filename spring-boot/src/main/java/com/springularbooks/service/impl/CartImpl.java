package com.springularbooks.service.impl;

import com.springularbooks.entity.Cart;
import com.springularbooks.entity.Customer;
import com.springularbooks.repository.CartRepository;
import com.springularbooks.repository.CustomerRepository;
import com.springularbooks.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Cart saveCart(Cart cart, Integer custId){
        Customer cust = customerRepository.findById(custId).get();
        cart.setCustomer(cust);
        return cartRepository.save(cart);
    }

    @Override
    public Cart findById(Integer cart_id) {
        Optional<Cart> c1 = cartRepository.findById(cart_id);
        if(!c1.isPresent()){
            return c1.get();
        }else return null;
    }

    @Override
    public Cart deleteCart(Integer cart_id) {
        Cart cart1 = cartRepository.findById(cart_id).get();
        cartRepository.delete(cart1);
        return cart1;
    }

    @Override
    public Cart updateCart(Integer cart_id, Cart cart){
        Cart cartdb = cartRepository.findById(cart_id).get();
        cartdb.setQuantity(cart.getQuantity());
        return cartRepository.save(cartdb);
    }

    @Override
    public Cart saveCart(Cart cart){
        return cartRepository.save(cart);
    }


}
