package com.springularbooks.repository;

import com.springularbooks.entity.Cart;
import com.springularbooks.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

    @Query("select cart from Cart cart where cart.customer.custId = ?1")
    public List<Cart> findcartItemsByCustomer(Integer custId);

    @Query("delete from Cart cart where cart.customer.custId = ?1")
    public void removeAllByCustId(Integer custId);



}
