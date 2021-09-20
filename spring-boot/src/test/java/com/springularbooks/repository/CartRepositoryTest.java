package com.springularbooks.repository;

import com.springularbooks.entity.Cart;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class CartRepositoryTest {

    @Autowired
    private CartRepository cartRepository;

}