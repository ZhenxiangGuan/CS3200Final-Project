package com.example.springtemplate.flights.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;



@Entity
@Table(name="tickets")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    private Date date;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    private String seat;

    public String getSeat() {
        return seat;
    }

    public void setSeat(String seats) {
        this.seat = seats;
    }

    private String fromWhere;

    public String getFromWhere() {
        return fromWhere;
    }

    public void setFromWhere(String fromWhere) {
        this.fromWhere = fromWhere;
    }

    private String destination;

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    @Enumerated(EnumType.STRING)
    private FlightClass flightClass;

    public FlightClass getFlightClass() {
        return flightClass;
    }

    public void setFlightClass(FlightClass flightClass) {
        this.flightClass = flightClass;
    }


    @ManyToOne
    @JsonIgnore
    private Flight flight;

    public Flight getFlight() {
        return flight;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }

    public Ticket(Integer id, Date date, String seat, String fromWhere, String destination, Flight flight) {
        this.id = id;
        this.date = date;
        this.seat = seat;
        this.fromWhere = fromWhere;
        this.destination = destination;
        this.flight = flight;
    }

    public Ticket() {
    }

    public void replaceAllAttributes(Ticket updatedTicket) {
        this.setDate(updatedTicket.getDate());
        this.setSeat(updatedTicket.getSeat());
        this.setFromWhere(updatedTicket.getFromWhere());
        this.setDestination(updatedTicket.getDestination());
    }
}
