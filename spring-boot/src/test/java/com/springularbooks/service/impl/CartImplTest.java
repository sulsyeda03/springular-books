package com.springularbooks.service.impl;

import com.springularbooks.entity.Cart;
import com.springularbooks.entity.Customer;
import com.springularbooks.repository.CartRepository;
import com.springularbooks.repository.CustomerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CartImplTest {

    @Autowired
    private CartImpl CartImpl;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private CustomerRepository customerRepository;

    @Test
    void saveCart() {
        Customer cust = customerRepository.getById(1);
       // System.out.println(cust);
        Cart cart1 = Cart.builder()
                .isbn("202")
                .unitPrice(25.5)
                .customer(cust)
                .build();

        cartRepository.save(cart1);

        Cart cart2 = Cart.builder()
                .isbn("203")
                .unitPrice(20.0)
                .customer(cust)
                .build();

        cartRepository.save(cart2);

        Cart cart3 = Cart.builder()
                .isbn("207")
                .unitPrice(26.5)
                .customer(cust)
                .build();

        cartRepository.save(cart3);

    }

    @Test
    void testSaveCart() {
    }

    @Test
    void findAll() {
        List<Cart> list = cartRepository.findAll();
        System.out.println(list);
    }

    @Test
    void findById() {
        Optional<Cart> c1 = cartRepository.findById(5);
        System.out.println(c1);
    }



    @Test
    void deleteCart() {
        Cart cart1 = cartRepository.findById(6).get();
        cartRepository.delete(cart1);
    }

//    @Test
//    void updateCart() {
//        cartRepository.updateCart(1,207,5);
//    }


//    @Test
//    void IfISBNAndCustIdExists() {
//        Integer quantity  = cartRepository.IfISBNAndCustIdExists(207,1);
//    }


//    @Test
//    void IfCustIdAndISBNExists() {
//        Integer quantity  = cartRepository.IfCustIdAndISBNExists(1,207);
//    }
}