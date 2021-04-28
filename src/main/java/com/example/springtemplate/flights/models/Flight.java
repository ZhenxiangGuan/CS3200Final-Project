package com.example.springtemplate.flights.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;


@Entity
@Table(name="flights")
public class Flight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    public Integer getId() {
        return id;
    }
    public void setId() { this.id = id;}

    private String type;
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    private Integer capacity;
    public Integer getCapacity() { return capacity; }
    public void setCapacity(Integer capacity) { this.capacity = capacity; }

    private Integer endurance;
    public Integer getEndurance() {return endurance; }
    public void setEndurance(Integer endurance) {this.endurance = endurance; }

    @ManyToOne
    @JsonIgnore
    private Passenger passenger;
    public Passenger getPassenger() { return passenger; }
    public void setPassenger(Passenger passenger) { this.passenger = passenger; }

    @ManyToOne
    @JsonIgnore
    private Airline airline;
    public Airline getAirline() { return airline; }
    public void setAirline(Airline airline) { this.airline = airline; }

    public Flight(Integer id,String type, Integer capacity, Integer endurance, Passenger passenger) {
        this.id = id;
        this.type = type;
        this.capacity = capacity;
        this.endurance = endurance;
        this.passenger = passenger;
    }
    public Flight() {}

    public void replaceAllAttributes(Flight updatedFlight) {
        this.setType(updatedFlight.getType());
        this.setCapacity(updatedFlight.getCapacity());
        this.setEndurance(updatedFlight.getEndurance());
    }
}



