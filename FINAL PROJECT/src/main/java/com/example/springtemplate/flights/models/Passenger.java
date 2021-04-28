package com.example.springtemplate.flights.models;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.math.BigInteger;
import java.sql.Date;
import java.util.List;
import javax.persistence.*;

@Entity
@Table(name="passengers")
public class Passenger {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date dateOfBirth;
    private String phone;
    private String passportNumber;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() { return firstName; }

    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }

    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getUsername() { return username; }

    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }

    public void setPassword(String password) { this.password = password; }

    public String getEmail() { return email; }

    public void setEmail(String email) { this.email = email; }

    public Date getDateOfBirth() {return dateOfBirth; }

    public void setDateOfBirth(Date dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    public String getPhone() {return phone; }

    public void setPhone(String phone) { this.phone = phone; }

    public String getPassportNumber() { return passportNumber;}

    public void setPassportNumber(String passportNumber) { this.passportNumber = passportNumber; }

    public Passenger
            (String first_name, String last_name, String username, String password, String email, Date date_of_birth,
             String phone, String passport_number) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.dateOfBirth = date_of_birth;
        this.phone = phone;
        this.passportNumber = passport_number;
    }

    public void replaceAllAttributes(Passenger updatedPassenger) {
        this.setFirstName(updatedPassenger.getFirstName());
        this.setLastName(updatedPassenger.getLastName());
        this.setUsername(updatedPassenger.getUsername());
        this.setPassword(updatedPassenger.getPassword());
        this.setEmail(updatedPassenger.getEmail());
        this.setDateOfBirth(updatedPassenger.getDateOfBirth());
        this.setPhone(updatedPassenger.getPhone());
        this.setPassportNumber(updatedPassenger.getPassportNumber());
    }


    public Passenger() {}
}
