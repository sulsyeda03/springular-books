package com.springularbooks.repository;

import com.springularbooks.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, Integer> {

    Orders findByOrderId(Integer orderId);












}
