package com.springularbooks.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

// This entity will be reflecting user information in our application

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(
        name = "tbl_customer"
)
public class Customer implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private Integer custId;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    // need to be checked , email as unique is not working
    @Column(length=100 , unique=true)
    private String email;
    private String password;


}
