package com.springularbooks.repository;

import com.springularbooks.entity.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<OrderDetails, Integer> {


}
