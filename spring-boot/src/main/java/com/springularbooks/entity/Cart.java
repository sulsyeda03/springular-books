package com.springularbooks.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;


// This entity will reflect the cart details
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "tbl_cart")
public class Cart implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cart_id;
    private String isbn;
    @Column(name="quantity")
    private Integer quantity;
    private Double unitPrice;

    @ManyToOne
    private Orders orders;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;



}
