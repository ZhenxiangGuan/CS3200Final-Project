package com.example.springtemplate.flights.daos;

import com.example.springtemplate.flights.models.Passenger;
import com.example.springtemplate.flights.repositories.PassengerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
// allow access from any internet domain
// implements database access using ORM
@CrossOrigin(origins = "*")
public class PassengerOrmDao {

  @Autowired
  PassengerRepository passengerRepository;

  @PostMapping("/api/passengers")
  public Passenger createPassenger(@RequestBody Passenger passenger) {
    return passengerRepository.save(passenger);
  }

  // map this method to an HTTP GET request
  @GetMapping("/api/passengers")
  public List<Passenger> findAllPassengers() {

    //retrieve all records from passengers table and return as list of passengers
    return passengerRepository.findAllPassengers();
  }

  // map this method to HTTP GET request
  @GetMapping("/api/passengers/{passengerId}")
  // execute this method when URL matches /api/passengers/ID
  public Passenger findPassengerById(
      @PathVariable("passengerId") Integer id) {

    // retrieve single user by ID and return as instance of User
    return passengerRepository.findPassengerById(id);
  }

  @PutMapping("/api/passengers/{passengerId}")
  public Passenger updatePassenger(
      @PathVariable("passengerId") Integer id,
      @RequestBody Passenger passengerUpdated){
    Passenger oldPassenger = passengerRepository.findPassengerById(id);
    oldPassenger.replaceAllAttributes(passengerUpdated);
    return passengerRepository.save(oldPassenger);
  }

  @DeleteMapping("/api/passengers/{passengerId}")
  public void deletePassenger(
      @PathVariable("passengerId") Integer id) {
    passengerRepository.deleteById(id);
  }

}
