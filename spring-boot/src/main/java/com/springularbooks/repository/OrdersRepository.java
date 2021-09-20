package com.springularbooks.repository;

import com.springularbooks.entity.Cart;
import com.springularbooks.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, Integer> {

    Orders findByOrderId(Integer orderId);

    @Query("select order from Orders order where order.customer.custId = ?1")
    public List<Orders> findOrdersByCustomer(Integer custId);
}
