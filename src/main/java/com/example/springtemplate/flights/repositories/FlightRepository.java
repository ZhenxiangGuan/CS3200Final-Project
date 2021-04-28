package com.example.springtemplate.flights.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import com.example.springtemplate.flights.models.Flight;


import java.util.List;

public interface FlightRepository extends CrudRepository<Flight, Integer> {

    @Query(value = "SELECT * FROM flights", nativeQuery = true)
    public List<Flight> findAllFlights();

    @Query(value = "SELECT * FROM flights WHERE id=:flightId", nativeQuery = true)
    public Flight findFlightById(@Param("flightId") Integer id);

    @Query(value = "SELECT * FROM flights WHERE passenger_id=:passengerId", nativeQuery = true)
    public List<Flight> findFlightsByPassengerId(@Param("passengerId") Integer id);
}