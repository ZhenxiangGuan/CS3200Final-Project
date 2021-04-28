package com.example.springtemplate.flights.repositories;

import com.example.springtemplate.flights.models.Ticket;
import com.example.springtemplate.flights.models.Flight;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TicketRepository extends CrudRepository<Ticket, Integer> {

    @Query(value = "SELECT * FROM tickets", nativeQuery = true)
    public List<Ticket> findAllTickets();

    @Query(value = "SELECT * FROM tickets WHERE id=:ticketId", nativeQuery = true)
    public Ticket findTicketById(@Param("ticketId") Integer id);

    @Query(value = "SELECT * FROM tickets where flight_id=:flightId", nativeQuery = true)
    public List<Ticket> findTicketsByFlightId(@Param("flightId") Integer id);

}