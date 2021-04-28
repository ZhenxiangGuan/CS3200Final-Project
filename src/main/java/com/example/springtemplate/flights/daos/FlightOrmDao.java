package com.example.springtemplate.flights.daos;

import com.example.springtemplate.flights.models.Flight;
import com.example.springtemplate.flights.models.Passenger;
import com.example.springtemplate.flights.repositories.FlightRepository;
import com.example.springtemplate.flights.repositories.PassengerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class FlightOrmDao {
  @Autowired
  FlightRepository flightRepository;

  @Autowired
  PassengerRepository passengerRepository;

  @PostMapping("/api/flights")
  public Flight createFlight(@RequestBody Flight flight) {
    return flightRepository.save(flight);
  }

  @PostMapping("/api/passengers/{passengerId}/flights")
  public Flight createFlightForPassenger(@PathVariable("passengerId") Integer pid,
                                    @RequestBody Flight flight) {
    Passenger passenger = passengerRepository.findPassengerById(pid);
    flight.setPassenger(passenger);
    return flightRepository.save(flight);
  }

  @GetMapping("/api/passengers/{passengerId}/flights")
  public List<Flight> findFlightsForPassenger(@PathVariable("passengerId") Integer passengerId) {
    return flightRepository.findFlightsByPassengerId(passengerId);
  }

  @GetMapping("/api/flights")
  public List<Flight> findAllFlights() {
    return flightRepository.findAllFlights();
  }

  @GetMapping("/api/flights/{flightId}")
  public Flight findFlightById(
      @PathVariable("flightId") Integer id) {
    return flightRepository.findFlightById(id);
  }

  @PutMapping("/api/flights/{flightId}")
  public Flight updateFlight(
      @PathVariable("flightId") Integer fid,
      @RequestBody Flight updatedFlight) {
    Flight flight = flightRepository.findFlightById(fid);
    flight.replaceAllAttributes(updatedFlight);
    return flightRepository.save(flight);
  }


  @DeleteMapping("/api/flights/{flightId}")
  public void deleteFlight(
      @PathVariable("flightId") Integer id) {
    flightRepository.deleteById(id);
  }
}