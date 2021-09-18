package com.springularbooks.entity;


import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

// This entity will reflect the orders related to custmer Id
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(
        name = "tbl_orders"
)
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(
            name = "order_id"
    )
    private Integer orderId;
    private Integer totalItems;
    private Double totalOrderCost;
    private Date orderDate;

    @OneToMany(mappedBy = "orders",fetch = FetchType.LAZY)
    @ToString.Exclude
    private List<OrderDetails> orderDetails;

    @ManyToOne(fetch = FetchType.LAZY)
    @ToString.Exclude
    @JoinColumn(
            name = "customer_id"
    )
    private Customer customer;






}
